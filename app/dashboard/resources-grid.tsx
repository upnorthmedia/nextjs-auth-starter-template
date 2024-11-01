"use client";

import { Card } from "@/app/components/ui/card";
import { ArrowUpRight, BookOpen, FileText, GraduationCap } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    title: "Employee Handbook",
    description: "Polices & Procedures",
    href: "/docs/handbook",
    icon: FileText,
  },
  {
    title: "Brand Guidelines",
    description: "Assets & Style Guide",
    href: "/docs/brand",
    icon: BookOpen,
  },
  {
    title: "Training Resources",
    description: "Training Materials & Courses",
    href: "/training",
    icon: GraduationCap,
  },
];

export function ResourcesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {resources.map((resource) => (
        <Link key={resource.title} href={resource.href}>
          <Card className="group relative overflow-hidden transition-all hover:shadow-lg bg-card/50 backdrop-blur-sm h-full">
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-primary/10 rounded-xl transition-colors group-hover:bg-primary/20">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold tracking-tight mb-1 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-white/80 group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}