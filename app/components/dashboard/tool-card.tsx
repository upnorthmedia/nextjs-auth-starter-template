import { Card } from "@/app/components/ui/card";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ToolCardProps {
  name: string;
  description: string;
  Icon: LucideIcon;
  url: string;
}

export function ToolCard({ name, description, Icon, url }: ToolCardProps) {
  return (
    <Link href={url}>
      <Card className="group relative overflow-hidden transition-all hover:shadow-lg bg-card/50 backdrop-blur-sm">
        <div className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-primary/10 rounded-xl transition-colors group-hover:bg-primary/20">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold tracking-tight mb-1 group-hover:text-primary transition-colors">{name}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}