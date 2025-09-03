export type issueColumns = {
  id: "type" | "key" | "summary" | "assignee" | "reporter";
  label: string;
  minWidth?: number;
  width?: number | string;
  align?: "right" | "center" | "left";
  pl?: number;
  pr?: number;
};

export type User = {
  id: string;
  name: string;
  avatarUrl: string;
};

export type IssueRow = {
  key: string;
  type: string;
  summary: string;
  assignee?: User;
  reporter: User;
};
