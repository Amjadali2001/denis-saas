"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MoreHorizontal, 
  Plus, 
  Search, 
  Filter,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const employees = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Frontend Developer",
    department: "Engineering",
    email: "alex.t@company.com",
    phone: "+1 234-567-8901",
    location: "New York",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&q=70",
    hoursThisWeek: "38h 15m",
    projects: ["Website Redesign", "Mobile App"],
    joinDate: "Jan 15, 2023"
  },
  {
    id: 2,
    name: "Sarah Wilson",
    role: "UI Designer",
    department: "Design",
    email: "sarah.w@company.com",
    phone: "+1 234-567-8902",
    location: "San Francisco",
    status: "On Leave",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=70",
    hoursThisWeek: "32h 45m",
    projects: ["Design System", "Marketing Campaign"],
    joinDate: "Mar 20, 2023"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Backend Developer",
    department: "Engineering",
    email: "michael.c@company.com",
    phone: "+1 234-567-8903",
    location: "Seattle",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&q=70",
    hoursThisWeek: "40h 00m",
    projects: ["API Integration", "Database Migration"],
    joinDate: "Feb 10, 2023"
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Product Manager",
    department: "Product",
    email: "emily.d@company.com",
    phone: "+1 234-567-8904",
    location: "Boston",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&q=70",
    hoursThisWeek: "37h 30m",
    projects: ["Product Roadmap", "Feature Planning"],
    joinDate: "Apr 5, 2023"
  },
  {
    id: 5,
    name: "James Wilson",
    role: "DevOps Engineer",
    department: "Operations",
    email: "james.w@company.com",
    phone: "+1 234-567-8905",
    location: "Chicago",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&q=70",
    hoursThisWeek: "39h 45m",
    projects: ["Infrastructure Setup", "CI/CD Pipeline"],
    joinDate: "May 15, 2023"
  }
];

const statusColors = {
  "Active": "bg-green-500/10 text-green-500",
  "On Leave": "bg-yellow-500/10 text-yellow-500",
  "Inactive": "bg-gray-500/10 text-gray-500"
};

export default function EmployeesPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Employees</h1>
          <p className="text-muted-foreground">
            Manage your team members and their access
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Employee
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Card className="p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex gap-2 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search employees..."
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
              <TableHead>Employee</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time Tracked</TableHead>
              <TableHead>Projects</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={employee.avatar} alt={employee.name} />
                      <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-muted-foreground">{employee.role}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-sm">
                      <Mail className="h-3 w-3" />
                      {employee.email}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Phone className="h-3 w-3" />
                      {employee.phone}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="h-3 w-3" />
                      {employee.location}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>
                  <Badge className={statusColors[employee.status as keyof typeof statusColors]}>
                    {employee.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {employee.hoursThisWeek}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      Joined {employee.joinDate}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {employee.projects.map((project) => (
                      <Badge key={project} variant="secondary" className="text-xs">
                        {project}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit Details</DropdownMenuItem>
                      <DropdownMenuItem>Time Entries</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Deactivate
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