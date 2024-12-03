"use client";

import { Card } from "@/components/ui/card";
import { Clock, Users, Building2, TrendingUp, DollarSign, Target, Briefcase, BarChart2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const stats = [
  {
    title: "Total Hours",
    value: "164.5",
    change: "+12.5%",
    icon: Clock,
    description: "vs. last month",
    trend: "positive",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Team Productivity",
    value: "87%",
    change: "+5.2%",
    icon: TrendingUp,
    description: "Efficiency rate",
    trend: "positive",
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Active Projects",
    value: "12",
    change: "+3",
    icon: Briefcase,
    description: "In progress",
    trend: "positive",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Cost Savings",
    value: "$2.8k",
    change: "+15.3%",
    icon: DollarSign,
    description: "Resource optimization",
    trend: "positive",
    color: "bg-amber-500/10 text-amber-500",
  },
];

const targets = [
  {
    title: "Weekly Target",
    current: 32,
    target: 40,
    unit: "hours",
    icon: Target,
    color: "bg-indigo-500/10 text-indigo-500",
  },
  {
    title: "Project Completion",
    current: 85,
    target: 100,
    unit: "%",
    icon: BarChart2,
    color: "bg-rose-500/10 text-rose-500",
  },
];

export function DashboardStats() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <span className={`text-sm font-medium ${
                stat.trend === "positive" ? "text-green-500" : "text-red-500"
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {targets.map((target) => (
          <Card key={target.title} className="p-6">
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${target.color}`}>
                <target.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{target.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    {target.current}/{target.target} {target.unit}
                  </span>
                </div>
                <Progress 
                  value={(target.current / target.target) * 100} 
                  className="mt-2"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}