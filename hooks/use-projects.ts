"use client";

import { useQuery } from '@tanstack/react-query';
import { projectsApi } from '@/lib/api';

export function useProjects() {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await projectsApi.list();
      return response.data;
    },
  });

  return {
    projects,
    isLoading,
    error,
  };
}