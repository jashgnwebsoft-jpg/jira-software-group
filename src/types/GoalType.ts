export type Goal = {
  goal: string;
  status: "ON TRACK" | "AT RISK" | "OFF TRACK";
  score: 0.7 | 0.5 | 0.2;
  progress: "25" | "50" | "75";
  targetDate: string;
  lastUpdate: string;
};
