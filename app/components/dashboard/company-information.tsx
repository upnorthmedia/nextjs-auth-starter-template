import { Building2, Phone, MapPin, Mail } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";

export function CompanyInformation() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 rounded-xl">
            <Building2 className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight">General Information</h2>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-medium">Contact Information</h3>
          </div>
          <div className="grid gap-2 text-sm">
            <p className="text-white/60 text-sm">
              <a href="mailto:help@huskyarmory.com" className="hover:underline">
                help@huskyarmory.com
              </a>
            </p>
            <p className="text-white/60 text-sm">
              <a href="tel:+14022274301" className="hover:underline">
                (402) 227-4301
              </a>
            </p>
          </div>
        </div>

        <Separator />

        <div>
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-medium">Address</h3>
          </div>
            <p className="text-sm text-white/60">
                1402 Jones St<br />
            STE 109<br />
            Omaha, NE 68102
          </p>
        </div>

        <Separator />

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-medium">Business Details</h3>
          </div>
          <p className="text-sm font-bold text-white/60 pb-1">
            EIN 
          </p>
          <p className="font-mono text-sm inline text-white/70 bg-muted-foreground/40 px-1.5 py-0.5 rounded">92-2435997</p>
        </div>
      </CardContent>
    </Card>
  );
} 