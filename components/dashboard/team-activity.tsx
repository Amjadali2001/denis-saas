"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { day: "Mon", development: 24, design: 18, marketing: 12 },
  { day: "Tue", development: 28, design: 22, marketing: 16 },
  { day: "Wed", development: 26, design: 20, marketing: 14 },
  { day: "Thu", development: 32, design: 24, marketing: 18 },
  { day: "Fri", development: 30, design: 26, marketing: 20 },
];

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Frontend Developer",
    hours: "8h 15m",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&q=70",
    status: "active",
  },
  {
    name: "Sarah Wilson",
    role: "UI Designer",
    hours: "6h 45m",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=70",
    status: "active",
  },
  {
    name: "Michael Chen",
    role: "Backend Developer",
    hours: "7h 30m",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&q=70",
    status: "break",
  },
  {
    name: "Emily Davis",
    role: "Product Manager",
    hours: "5h 45m",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&q=70",
    status: "offline",
  },
];

const statusColors = {
  active: "bg-green-500/10 text-green-500",
  break: "bg-yellow-500/10 text-yellow-500",
  offline: "bg-gray-500/10 text-gray-500",
};

export function TeamActivity() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Team Activity</h2>
        <p className="text-sm text-muted-foreground">
          Real-time team performance tracking
        </p>
      </div>

      <div className="space-y-6">
        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="development" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="design" 
                stroke="hsl(var(--secondary))" 
                strokeWidth={2}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="marketing" 
                stroke="hsl(var(--accent))" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Active Team Members</h3>
          <ScrollArea className="h-[180px] pr-4">
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={statusColors[member.status as keyof typeof statusColors]}>
                      {member.status}
                    </Badge>
                    <span className="text-sm font-medium">{member.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </Card>
  );
}