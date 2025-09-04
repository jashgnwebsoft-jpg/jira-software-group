import { useQuery } from "@tanstack/react-query";
import { fetchGoals, fetchIssues, fetchProjects } from "./api";

export function useGoals() {
  return useQuery({
    queryKey: ["goals"],
    queryFn: fetchGoals,
  });
}

export function useIssues() {
  return useQuery({
    queryKey: ["issues"],
    queryFn: fetchIssues,
  });
}

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
}
