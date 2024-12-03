"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Play, Pause, Timer, Tag } from "lucide-react";
import { useTimeTracker } from "@/hooks/use-time-tracker";

const mockProjects = [
  { id: 1, name: "Website Redesign", color: "bg-blue-500" },
  { id: 2, name: "Mobile App", color: "bg-green-500" },
  { id: 3, name: "Marketing Campaign", color: "bg-purple-500" },
  { id: 4, name: "CRM Integration", color: "bg-yellow-500" },
  { id: 5, name: "UI/UX Design System", color: "bg-pink-500" },
];

export function TimeTracker() {
  const { isTracking, time, startTracking, stopTracking } = useTimeTracker();
  const [description, setDescription] = useState("");
  const [selectedProject, setSelectedProject] = useState<string>("");

  const handleToggleTracking = () => {
    if (isTracking) {
      stopTracking();
      setDescription("");
      setSelectedProject("");
    } else if (selectedProject) {
      startTracking(parseInt(selectedProject), description);
    }
  };

  const selectedProjectColor = mockProjects.find(
    (p) => p.id.toString() === selectedProject
  )?.color;

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Timer className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{time}</h2>
          <p className="text-sm text-muted-foreground">Current Session</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <Input 
            placeholder="What are you working on?" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="flex-1"
            disabled={isTracking}
          />
          <Button variant="outline" size="icon" disabled={isTracking}>
            <Tag className="h-4 w-4" />
          </Button>
        </div>
        
        <Select 
          value={selectedProject} 
          onValueChange={setSelectedProject}
          disabled={isTracking}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select project" />
          </SelectTrigger>
          <SelectContent>
            {mockProjects.map((project) => (
              <SelectItem 
                key={project.id} 
                value={project.id.toString()}
                className="flex items-center gap-2"
              >
                <div className={`w-2 h-2 rounded-full ${project.color}`} />
                {project.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          className="w-full gap-2"
          size="lg"
          onClick={handleToggleTracking}
          variant={isTracking ? "destructive" : "default"}
          disabled={!isTracking && (!selectedProject || !description)}
        >
          {isTracking ? (
            <>
              <Pause className="h-5 w-5" /> Stop Tracking
            </>
          ) : (
            <>
              <Play className="h-5 w-5" /> Start Tracking
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}