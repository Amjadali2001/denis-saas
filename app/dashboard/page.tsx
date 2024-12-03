"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardStats } from "@/components/dashboard/stats";
import { RecentActivities } from "@/components/recent-activities";
import { TimeTracker } from "@/components/time-tracker";
import { ProjectOverview } from "@/components/dashboard/project-overview";
import { TeamActivity } from "@/components/dashboard/team-activity";
import { WeeklyOverview } from "@/components/dashboard/weekly-overview";

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <DashboardHeader />
      <DashboardStats />
      
      <div className="grid gap-6 md:grid-cols-2">
        <TimeTracker />
        <RecentActivities />
      </div>
      
      <div className="grid gap-6 lg:grid-cols-2">
        <ProjectOverview />
        <TeamActivity />
      </div>
      
      <WeeklyOverview />
    </div>
  );
}