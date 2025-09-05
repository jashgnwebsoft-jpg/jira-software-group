import axios from "axios";

const axiosInstance = axios.create({ baseURL: import.meta.env.BASE_URL });

export const fetchIssues = async () => {
  return (await axiosInstance.get("issues")).data;
};
export const fetchProjects = async () => {
  return (await axiosInstance.get("projects")).data;
};
export const fetchGoals = async () => {
  return (await axiosInstance.get("goals")).data;
};
