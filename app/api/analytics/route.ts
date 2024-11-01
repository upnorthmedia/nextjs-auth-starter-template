import { NextResponse } from "next/server";

const PLAUSIBLE_API_KEY = process.env.PLAUSIBLE_API_KEY;
const PLAUSIBLE_SITES = {
  'huskyarmory.com': 'huskyarmory.com',
  '3dgunbuilder.com': '3dgunbuilder.com',
  'huskygiveaways.com': 'huskygiveaways.com'
} as const;

type PlausibleSite = keyof typeof PLAUSIBLE_SITES;

async function fetchPlausibleData(siteId: PlausibleSite, period: string, metrics: string, date?: string) {
  const apiUrl = new URL("https://plausible.io/api/v1/stats/aggregate");
  apiUrl.searchParams.set("site_id", siteId);
  apiUrl.searchParams.set("period", period);
  apiUrl.searchParams.set("metrics", metrics);
  
  if (date && period === "custom") {
    apiUrl.searchParams.set("date", date);
  } else if (date) {
    apiUrl.searchParams.set("date", date);
  }

  console.log('Fetching from:', apiUrl.toString());

  const response = await fetch(apiUrl.toString(), {
    headers: {
      Authorization: `Bearer ${PLAUSIBLE_API_KEY}`,
    },
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Plausible API error:', response.status, errorText);
    throw new Error(`Plausible API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data;
}

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    if (!PLAUSIBLE_API_KEY) {
      console.error('Missing Plausible API key');
      return new NextResponse(
        JSON.stringify({ 
          error: 'Missing Plausible API key configuration',
          current: { results: { visitors: { value: 0 }, pageviews: { value: 0 }, bounce_rate: { value: 0 }, visit_duration: { value: 0 } } },
          previous: { results: { visitors: { value: 0 }, pageviews: { value: 0 }, bounce_rate: { value: 0 }, visit_duration: { value: 0 } } }
        }), 
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const { searchParams } = new URL(request.url);
    const metrics = searchParams.get("metrics") || "visitors,pageviews,bounce_rate,visit_duration";
    const siteId = searchParams.get("siteId");

    console.log('Analytics request received:', {
      siteId,
      metrics,
      hasApiKey: !!PLAUSIBLE_API_KEY
    });

    if (!siteId || !(siteId in PLAUSIBLE_SITES)) {
      console.error('Invalid site ID received:', siteId);
      return new NextResponse("Invalid site ID", { status: 400 });
    }

    // Fetch current period (last 30 days)
    const currentData = await fetchPlausibleData(siteId as PlausibleSite, "30d", metrics);

    // Calculate date range for previous 30 days period
    const today = new Date();
    const thirtyDaysAgo = new Date(today);
    const sixtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(today.getDate() - 30);
    sixtyDaysAgo.setDate(today.getDate() - 60);

    const formatDate = (date: Date) => {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };

    // Create date range for previous period (60 days ago to 30 days ago)
    const previousPeriodDate = `${formatDate(sixtyDaysAgo)},${formatDate(thirtyDaysAgo)}`;

    // Fetch previous period
    const previousData = await fetchPlausibleData(siteId as PlausibleSite, "custom", metrics, previousPeriodDate);

    const transformedData = {
      current: {
        results: currentData.results
      },
      previous: {
        results: previousData.results
      }
    };

    console.log('Transformed data:', JSON.stringify(transformedData, null, 2));
    return NextResponse.json(transformedData);
    
  } catch (error) {
    console.error("Analytics API Error:", error);
    return new NextResponse(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        current: {
          results: {
            visitors: { value: 0 },
            pageviews: { value: 0 },
            bounce_rate: { value: 0 },
            visit_duration: { value: 0 }
          }
        },
        previous: {
          results: {
            visitors: { value: 0 },
            pageviews: { value: 0 },
            bounce_rate: { value: 0 },
            visit_duration: { value: 0 }
          }
        }
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
} 