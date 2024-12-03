"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, Users, AlertCircle } from "lucide-react";

const projects = [
  {
    name: "Website Redesign",
    progress: 75,
    hours: 45,
    team: 6,
    status: "on-track",
    deadline: "2 days",
  },
  {
    name: "Mobile App Development",
    progress: 60,
    hours: 32,
    team: 4,
    status: "at-risk",
    deadline: "5 days",
  },
  {
    name: "Marketing Campaign",
    progress: 90,
    hours: 28,
    team: 3,
    status: "on-track",
    deadline: "1 day",
  },
  {
    name: "CRM Integration",
    progress: 40,
    hours: 22,
    team: 5,
    status: "delayed",
    deadline: "8 days",
  },
  {
    name: "UI/UX Design System",
    progress: 85,
    hours: 18,
    team: 2,
    status: "on-track",
    deadline: "3 days",
  },
];

const statusColors = {
  "on-track": "bg-green-500/10 text-green-500",
  "at-risk": "bg-yellow-500/10 text-yellow-500",
  "delayed": "bg-red-500/10 text-red-500",
};

export function ProjectOverview() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Project Overview</h2>
        <p className="text-sm text-muted-foreground">
          Track project progress and resource allocation
        </p>
      </div>

      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.name} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{project.name}</h3>
                    <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-1">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{project.hours}h</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{project.team} members</span>
                    </div>
                    {project.status === "at-risk" && (
                      <div className="flex items-center gap-1 text-sm text-yellow-500">
                        <AlertCircle className="h-4 w-4" />
                        <span>Due in {project.deadline}</span>
                      </div>
                    )}
                  </div>
                </div>
                <span className="text-sm font-medium">{project.progress}%</span>
              </div>
              <Progress value={project.progress} />
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}