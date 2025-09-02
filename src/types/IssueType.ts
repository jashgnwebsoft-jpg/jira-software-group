export type issueColumns = {
  id: "type" | "key" | "summary" | "assignee" | "reporter";
  label: string;
  minWidth?: number;
  width?: number | string;
  align?: "right" | "center" | "left";
  pl?: number;
  pr?: number;
};
