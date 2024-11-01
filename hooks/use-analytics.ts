import useSWR from 'swr';

interface PlausibleMetrics {
  bounce_rate: { value: number };
  pageviews: { value: number };
  visit_duration: { value: number };
  visitors: { value: number };
}

interface AnalyticsResponse {
  current: { results: PlausibleMetrics };
  previous: { results: PlausibleMetrics };
}

export function useAnalytics(siteId: string) {
  const { data, error, isLoading } = useSWR<AnalyticsResponse>(
    siteId ? `/api/analytics?metrics=visitors,pageviews,bounce_rate,visit_duration&siteId=${siteId}` : null,
    async (url: string) => {
      console.log('Fetching analytics for site:', siteId);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Analytics fetch error:', {
            status: response.status,
            statusText: response.statusText,
            error: errorText,
            url
          });
          throw new Error(`Failed to fetch analytics: ${errorText}`);
        }
        const data = await response.json();
        console.log('Analytics data received:', {
          siteId,
          dataPresent: !!data,
          hasCurrentResults: !!data?.current?.results,
          hasPreviousResults: !!data?.previous?.results
        });
        return data;
      } catch (err) {
        console.error('Analytics hook error:', {
          error: err,
          siteId,
          url
        });
        throw err;
      }
    },
    {
      refreshInterval: 300000,
      revalidateOnFocus: false,
      errorRetryCount: 3,
      errorRetryInterval: 5000
    }
  );

  // Format the metrics for display
  const formatMetric = (value: number | undefined, type: string) => {
    if (value === undefined || value === null) return '0';
    
    if (type === 'bounce_rate') {
      return `${Math.round(value)}%`;
    }
    if (type === 'visit_duration') {
      const minutes = Math.floor(value / 60);
      const seconds = Math.floor(value % 60);
      return `${minutes}m ${seconds}s`;
    }
    return value.toLocaleString();
  };

  // Calculate percentage change
  const calculateChange = (current?: number, previous?: number): string => {
    if (!current || !previous) return '+0%';
    
    const change = ((current - previous) / previous) * 100;
    const sign = change >= 0 ? '+' : '';
    return `${sign}${Math.round(change)}%`;
  };

  const safeData = data || {
    current: { results: {
      visitors: { value: 0 },
      pageviews: { value: 0 },
      bounce_rate: { value: 0 },
      visit_duration: { value: 0 }
    } },
    previous: { results: {
      visitors: { value: 0 },
      pageviews: { value: 0 },
      bounce_rate: { value: 0 },
      visit_duration: { value: 0 }
    } }
  };

  const metrics = {
    visitors: {
      value: formatMetric(safeData.current.results?.visitors?.value, 'visitors'),
      change: calculateChange(
        safeData.current.results?.visitors?.value,
        safeData.previous.results?.visitors?.value
      )
    },
    pageviews: {
      value: formatMetric(safeData.current.results?.pageviews?.value, 'pageviews'),
      change: calculateChange(
        safeData.current.results?.pageviews?.value,
        safeData.previous.results?.pageviews?.value
      )
    },
    bounceRate: {
      value: formatMetric(safeData.current.results?.bounce_rate?.value, 'bounce_rate'),
      change: calculateChange(
        safeData.current.results?.bounce_rate?.value,
        safeData.previous.results?.bounce_rate?.value
      )
    },
    visitDuration: {
      value: formatMetric(safeData.current.results?.visit_duration?.value, 'visit_duration'),
      change: calculateChange(
        safeData.current.results?.visit_duration?.value,
        safeData.previous.results?.visit_duration?.value
      )
    }
  };

  return {
    metrics,
    isLoading,
    error
  };
} 