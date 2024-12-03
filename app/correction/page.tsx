"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Clock, Calendar, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const corrections = [
  {
    id: 1,
    date: "2024-03-01",
    employee: "John Doe",
    type: "Missing Check-in",
    status: "Pending",
    time: "09:00 AM",
    description: "Forgot to check in due to system issues",
  },
  {
    id: 2,
    date: "2024-03-02",
    employee: "Sarah Smith",
    type: "Overtime",
    status: "Approved",
    time: "06:30 PM",
    description: "Worked late to complete project deadline",
  },
  // Add more correction data as needed
];

const statusColors = {
  "Pending": "bg-yellow-500/10 text-yellow-500",
  "Approved": "bg-green-500/10 text-green-500",
  "Rejected": "bg-red-500/10 text-red-500",
};

export default function CorrectionPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Time Corrections</h1>
          <p className="text-muted-foreground">
            Review and manage time entry corrections
          </p>
        </div>
      </div>

      <Card className="p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex gap-2 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search corrections..."
                className="pl-8"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Employee</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {corrections.map((correction) => (
              <TableRow key={correction.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    {new Date(correction.date).toLocaleDateString()}
                  </div>
                </TableCell>
                <TableCell>{correction.employee}</TableCell>
                <TableCell>{correction.type}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    {correction.time}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={statusColors[correction.status as keyof typeof statusColors]}>
                    {correction.status}
                  </Badge>
                </TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {correction.description}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Approve</DropdownMenuItem>
                      <DropdownMenuItem>Reject</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}