"use client";

import { StatsCard } from "@/app/components/dashboard/stats-card";
import { ToolCard } from "@/app/components/dashboard/tool-card";
import { ResourcesGrid } from "./resources-grid";
import { useAnalytics } from "@/hooks/use-analytics";
import { Activity, Clock, MousePointerClick, Users, PawPrint, Printer, BarChart, BarChart2, MessageSquare, Shield, HeadphonesIcon, CheckSquare, ExternalLink, Lock, Globe } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { useState } from "react";
import { CompanyInformation } from "@/app/components/dashboard/company-information";
import { KeyContacts } from "@/app/components/dashboard/key-contacts";

const websites = [
  {
    id: "huskyarmory.com",
    name: "Husky Armory",
    icon: PawPrint,
    url: "https://huskyarmory.com",
    burl: "https://huskyarmory.com/wp-admin",
  },
  {
    id: "3dgunbuilder.com",
    name: "3D Gun Builder",
    icon: Printer,
    url: "https://3dgunbuilder.com",
    burl: "https://3dgunbuilder.com/wp-admin",
  },
  {
    id: "huskygiveaways.com",
    name: "Husky Giveaways",
    icon: Printer,
    url: "https://huskygiveaways.com",
    burl: "https://huskygiveaways.com/wp-admin",
  },
];

const tools = [
  {
    name: "Metorik",
    description: "WooCommerce Analytics",
    icon: BarChart,
    url: "https://app.metorik.com/",
  },
  {
    name: "Plausible",
    description: "Website Analytics",
    icon: BarChart2,
    url: "https://plausible.io/sites",
  },
  {
    name: "Slack",
    description: "Team Communication",
    icon: MessageSquare,
    url: "https://up-north-media.slack.com/ssb/redirect?entry_point=domain_signin",
  },
  {
    name: "ClearSale",
    description: "Fraud Prevention",
    icon: Shield,
    url: "https://portal.clear.sale/fraud/dashboard",
  },
  {
    name: "HelpScout",
    description: "Customer Support",
    icon: HeadphonesIcon,
    url: "https://secure.helpscout.net/inboxes/086552140cd905a5/views/7523916",
  },
  {
    name: "Todoist",
    description: "Task Management",
    icon: CheckSquare,
    url: "https://app.todoist.com/app/project/6MwVJjXmCxJJgC9q",
  },
];

export function DashboardContent() {
  const [selectedSite, setSelectedSite] = useState(websites[0].id);
  const { metrics, isLoading } = useAnalytics(selectedSite);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-8">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col space-y-4 h-full">
              {websites.map((website) => (
                <div key={website.name} className="flex flex-col space-y-4 p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 shadow-sm hover:shadow-md transition-shadow flex-1">
                  <div className="flex items-center space-x-4">
                    <website.icon className="h-6 w-6 text-zinc-400" />
                    <h3 className="text-lg font-semibold text-zinc-100">{website.name}</h3>
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between flex-1 px-4 py-2.5 
                        bg-primary text-primary-foreground
                        hover:bg-primary/10 hover:text-primary-foreground
                        transition-all duration-200 ease-in-out
                        rounded-md border border-primary/20
                        shadow-sm hover:shadow-md hover:scale-[1.02]"
                    >
                      <span className="flex items-center space-x-2">
                        <Globe className="h-4 w-4" />
                        <span className="font-medium text-sm">Website</span>
                      </span>
                      <ExternalLink className="h-4 w-4 opacity-70" />
                    </a>
                    <a 
                      href={website.burl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between flex-1 px-4 py-2.5
                        bg-zinc-800 text-white
                        hover:bg-zinc-900/50 hover:text-zinc-300
                        transition-all duration-200 ease-in-out
                        rounded-md border border-zinc-800/50
                        shadow-sm hover:shadow-md hover:scale-[1.02]"
                    >
                      <span className="flex items-center space-x-2">
                        <Lock className="h-4 w-4" />
                        <span className="font-medium text-sm">Admin</span>
                      </span>
                      <ExternalLink className="h-4 w-4 opacity-70" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <CompanyInformation />
            <KeyContacts />
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Tools & Software
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <ToolCard
                    key={tool.name}
                    name={tool.name}
                    description={tool.description}
                    Icon={tool.icon}
                    url={tool.url}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Resources
                </h2>
              </div>
              <ResourcesGrid />
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Analytics</h2>
            <Select value={selectedSite} onValueChange={setSelectedSite}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select website" />
              </SelectTrigger>
              <SelectContent>
                {websites.map((site) => (
                  <SelectItem key={site.id} value={site.id}>
                    {site.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard
              name="Total Visitors"
              value={metrics?.visitors.value || "0"}
              change={metrics?.visitors.change || "0%"}
              Icon={Users}
              isLoading={isLoading}
            />
            <StatsCard
              name="Total Pageviews"
              value={metrics?.pageviews.value || "0"}
              change={metrics?.pageviews.change || "0%"}
              Icon={MousePointerClick}
              isLoading={isLoading}
            />
            <StatsCard
              name="Bounce Rate"
              value={metrics?.bounceRate.value || "0%"}
              change={metrics?.bounceRate.change || "0%"}
              Icon={Activity}
              isLoading={isLoading}
            />
            <StatsCard
              name="Visit Duration"
              value={metrics?.visitDuration.value || "0m"}
              change={metrics?.visitDuration.change || "0%"}
              Icon={Clock}
              isLoading={isLoading}
            />
          </div>
        </section>
      </div>
    </main>
  );
}