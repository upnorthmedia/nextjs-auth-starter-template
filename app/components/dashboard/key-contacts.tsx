import { Mail, Phone, User } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";

export function KeyContacts() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm">
      <CardHeader>
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 rounded-xl">
            <User className="h-6 w-6 text-primary" />
            </div>
          <h2 className="text-xl font-semibold tracking-tight">Key Contacts</h2>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <User className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-medium">Cody Yurk</h3>
          </div>
          <div className="grid gap-2 text-sm">
            <p className="text-sm text-muted-foreground">
              <a href="mailto:cody@upnorthmedia.co" className="hover:underline inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-white/60" />
                cody@upnorthmedia.co
              </a>
            </p>
            <p className="text-white/60">
              <a href="tel:+13038286653" className="hover:underline inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-white/60" />
                (303) 828-6653
              </a>
            </p>
          </div>
        </div>

        <Separator />

        <div>
          <div className="flex items-center gap-2 mb-3">
            <User className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-medium">Andrew Ryder</h3>
          </div>
          <div className="grid gap-2 text-sm">
            <p className="text-sm text-muted-foreground">
              <a href="mailto:andrew@upnorthmedia.co" className="hover:underline inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-white/60" />
                andrew@upnorthmedia.co
              </a>
            </p>
            <p className="text-white/60">
              <a href="tel:+14026570062" className="hover:underline inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-white/60" />
                (402) 657-0062
              </a>
            </p>
          </div>
        </div>

        <Separator />

        <div>
          <div className="flex items-center gap-2 mb-3">
            <User className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-medium">Shay Liebherr</h3>
          </div>
          <div className="grid gap-2 text-sm">
            <p className="text-sm text-muted-foreground">
              <a href="mailto:shay@upnorthmedia.co" className="hover:underline inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-white/60" />
                shay@upnorthmedia.co
              </a>
            </p>
            <p className="text-white/60">
              <a href="tel:+19208577642" className="hover:underline inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-white/60" />
                (920) 857-7642
              </a>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 