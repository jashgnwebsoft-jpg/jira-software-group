
export type Project = {
  id: number;
  name: string;
  key: string;
  type: "Company-managed software" | "Team-managed software";
  lead: {
    name: string;
    avatar: string;
  };
};
