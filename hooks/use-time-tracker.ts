"use client";

import { useState, useEffect } from 'react';
import {  ToastActionElement, ToastProps} from '@/components/ui/toast';
import { useToast } from './use-toast';

export function useTimeTracker() {
  const [isTracking, setIsTracking] = useState(false);
  const [time, setTime] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTracking) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking]);

  const startTracking = async (projectId: number, description: string) => {
    try {
      setIsTracking(true);
      toast({
        title: "Time tracking started",
        description: "Your time is now being tracked",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to start time tracking",
        variant: "destructive",
      });
    }
  };

  const stopTracking = async () => {
    try {
      setIsTracking(false);
      setTime(0);
      toast({
        title: "Time tracking stopped",
        description: "Your time entry has been saved",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to stop time tracking",
        variant: "destructive",
      });
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return {
    isTracking,
    time: formatTime(time),
    startTracking,
    stopTracking,
  };
}