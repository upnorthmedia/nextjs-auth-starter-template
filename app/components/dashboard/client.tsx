"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { BarChart3, BookOpen, Box, Building2, Globe, Users, Wallet } from "lucide-react";
import { StatsCard } from "@/app/components/dashboard/stats-card";
import { ToolCard } from "@/app/components/dashboard/tool-card";
import { Card } from "@/app/components/ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    name: "Total Revenue",
    value: "$1.2M",
    change: "+12.3%",
    icon: Wallet,
  },
  {
    name: "Active Projects",
    value: "24",
    change: "+2.1%",
    icon: BarChart3,
  },
  {
    name: "Team Members",
    value: "48",
    change: "+4.3%",
    icon: Users,
  },
  {
    name: "Client Growth",
    value: "18%",
    change: "+2.4%",
    icon: Building2,
  },
];

const tools = [
  {
    name: "WordPress Admin",
    description: "Content Management System",
    icon: Globe,
    url: "https://upnorthmedia.com/wp-admin",
  },
  {
    name: "Jira",
    description: "Project Management",
    icon: Box,
    url: "https://upnorthmedia.atlassian.net",
  },
  {
    name: "Documentation",
    description: "Internal Guides & Docs",
    icon: BookOpen,
    url: "/docs",
  },
];

export function DashboardClient() {
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <StatsCard
            key={stat.name}
            name={stat.name}
            value={stat.value}
            change={stat.change}
            Icon={stat.icon}
          />
        ))}
      </div>

      <Tabs defaultValue="tools" className="mb-8">
        <TabsList>
          <TabsTrigger value="tools">Tools & Software</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        <TabsContent value="tools" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </TabsContent>
        <TabsContent value="resources" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Employee Handbook</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Access company policies and guidelines
              </p>
              <Link
                href="/docs/handbook"
                className="text-sm text-primary hover:underline inline-flex items-center"
              >
                View Handbook
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Link>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Brand Guidelines</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Access our brand assets and style guide
              </p>
              <Link
                href="/docs/brand"
                className="text-sm text-primary hover:underline inline-flex items-center"
              >
                View Guidelines
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Link>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Training Resources</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Access training materials and courses
              </p>
              <Link
                href="/training"
                className="text-sm text-primary hover:underline inline-flex items-center"
              >
                View Resources
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Link>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}