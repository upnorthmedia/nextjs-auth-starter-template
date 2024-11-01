import { Card } from "@/app/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  name: string;
  value: string;
  change: string;
  Icon: LucideIcon;
  isLoading?: boolean;
}

export function StatsCard({ name, value, change, Icon, isLoading }: StatsCardProps) {
  const isPositive = change.startsWith('+');
  
  return (
    <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm">
      <div className="p-6">
        {isLoading ? (
          <div className="animate-pulse">
            <div className="h-8 bg-primary/10 rounded w-16 mb-4" />
            <div className="h-6 bg-primary/10 rounded w-24" />
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className={cn(
                "text-sm font-medium",
                isPositive ? "text-emerald-400" : "text-red-400"
              )}>
                {change}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-1">{value}</h3>
              <p className="text-sm text-muted-foreground">{name}</p>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}