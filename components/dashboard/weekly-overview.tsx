"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const weeklyData = [
  { name: "Week 1", actual: 160, target: 168, overtime: 0 },
  { name: "Week 2", actual: 165, target: 168, overtime: 0 },
  { name: "Week 3", actual: 172, target: 168, overtime: 4 },
  { name: "Week 4", actual: 168, target: 168, overtime: 0 },
];

const monthlyData = [
  { name: "Jan", actual: 680, target: 672, overtime: 8 },
  { name: "Feb", actual: 645, target: 672, overtime: 0 },
  { name: "Mar", actual: 688, target: 672, overtime: 16 },
  { name: "Apr", actual: 672, target: 672, overtime: 0 },
];

export function WeeklyOverview() {
  return (
    <Card className="p-6">
      <Tabs defaultValue="weekly" className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Time Overview</h2>
            <p className="text-sm text-muted-foreground">
              Track working hours and overtime
            </p>
          </div>
          <TabsList>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="weekly" className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="actual"
                stackId="1"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
                name="Actual Hours"
              />
              <Area
                type="monotone"
                dataKey="overtime"
                stackId="1"
                stroke="hsl(var(--destructive))"
                fill="hsl(var(--destructive))"
                fillOpacity={0.2}
                name="Overtime"
              />
              <Area
                type="monotone"
                dataKey="target"
                stroke="hsl(var(--muted))"
                strokeDasharray="5 5"
                fill="none"
                name="Target Hours"
              />
            </AreaChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="monthly" className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="actual"
                stackId="1"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
                name="Actual Hours"
              />
              <Area
                type="monotone"
                dataKey="overtime"
                stackId="1"
                stroke="hsl(var(--destructive))"
                fill="hsl(var(--destructive))"
                fillOpacity={0.2}
                name="Overtime"
              />
              <Area
                type="monotone"
                dataKey="target"
                stroke="hsl(var(--muted))"
                strokeDasharray="5 5"
                fill="none"
                name="Target Hours"
              />
            </AreaChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    </Card>
  );
}