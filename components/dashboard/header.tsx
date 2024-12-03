"use client";

import { Button } from "@/components/ui/button";
import { Clock, Download, Filter } from "lucide-react";
import { DateRangePicker } from "@/components/date-range-picker";

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Clock className="h-8 w-8 text-primary" />
          Welcome to Clockin
        </h1>
        <p className="text-muted-foreground">
          Track your team's time and boost productivity
        </p>
      </div>
      
      <div className="flex items-center gap-2 flex-wrap">
        <DateRangePicker />
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
}