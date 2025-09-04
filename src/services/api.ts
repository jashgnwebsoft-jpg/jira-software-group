import axios from "axios";

const BASE_URL = "http://localhost:3000/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const fetchIssues = async () => {
  return (await axiosInstance.get("issues")).data;
};
export const fetchProjects = async () => {
  return (await axiosInstance.get("projects")).data;
};
export const fetchGoals = async () => {
  return (await axiosInstance.get("goals")).data;
};