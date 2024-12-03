"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { addDays, format, startOfToday } from "date-fns";

const events = [
  {
    id: 1,
    title: "Team Meeting",
    date: startOfToday(),
    time: "10:00 AM",
    duration: "1h",
    attendees: [
      {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&q=80",
      },
      {
        name: "Sarah Smith",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=80",
      },
    ],
    type: "meeting",
  },
  {
    id: 2,
    title: "Project Deadline",
    date: addDays(startOfToday(), 2),
    time: "5:00 PM",
    type: "deadline",
  },
  // Add more events as needed
];

const eventTypes = {
  meeting: "bg-blue-500/10 text-blue-500",
  deadline: "bg-red-500/10 text-red-500",
  holiday: "bg-green-500/10 text-green-500",
};

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const selectedDateEvents = events.filter(
    (event) => format(event.date, "yyyy-MM-dd") === format(date || new Date(), "yyyy-MM-dd")
  );

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Calendar</h1>
          <p className="text-muted-foreground">
            Schedule and manage your events
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">
              {format(date || new Date(), "MMMM yyyy")}
            </h3>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">
            Events for {format(date || new Date(), "MMM dd, yyyy")}
          </h3>
          <div className="space-y-4">
            {selectedDateEvents.length > 0 ? (
              selectedDateEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start gap-4 p-3 rounded-lg border"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{event.title}</h4>
                      <Badge className={eventTypes[event.type as keyof typeof eventTypes]}>
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {event.time} {event.duration && `(${event.duration})`}
                    </p>
                    {event.attendees && (
                      <div className="flex items-center gap-2 mt-2">
                        {event.attendees.map((attendee, index) => (
                          <Avatar key={index} className="w-6 h-6">
                            <AvatarImage src={attendee.avatar} alt={attendee.name} />
                            <AvatarFallback>{attendee.name[0]}</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-4">
                No events scheduled for this day
              </p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}