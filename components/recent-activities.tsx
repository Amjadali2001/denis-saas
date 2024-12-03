"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Building2, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const recentActivities = [
  {
    id: 1,
    project: "Website Redesign",
    date: "Today",
    duration: "2h 15m",
    status: "completed",
    color: "bg-blue-500",
  },
  {
    id: 2,
    project: "Mobile App",
    date: "Today",
    duration: "1h 30m",
    status: "in-progress",
    color: "bg-green-500",
  },
  {
    id: 3,
    project: "Marketing Campaign",
    date: "Yesterday",
    duration: "3h 45m",
    status: "completed",
    color: "bg-purple-500",
  },
  {
    id: 4,
    project: "Client Meeting",
    date: "Yesterday",
    duration: "1h 00m",
    status: "completed",
    color: "bg-yellow-500",
  },
];

export function RecentActivities() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Recent Activities</h2>
            <p className="text-sm text-muted-foreground">
              Your latest time entries
            </p>
          </div>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentActivities.map((activity) => (
            <TableRow key={activity.id}>
              <TableCell className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${activity.color}`} />
                <span>{activity.project}</span>
              </TableCell>
              <TableCell className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                {activity.date}
              </TableCell>
              <TableCell>{activity.duration}</TableCell>
              <TableCell>
                <Badge variant={activity.status === "completed" ? "default" : "secondary"}>
                  {activity.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}