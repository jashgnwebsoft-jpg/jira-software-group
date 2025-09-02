import { LocalFlorist, Settings } from "@mui/icons-material";
import type { SubtaskType } from "../types/SubtaskType";
import type { Goal } from "../types/GoalType";

export const ChildIssueData: string[] = [
  "Design website UX",
  "Develop website frontend",
  "Connect to payment platform",
  "Write copy & prepare assets",
  "Conduct launch preparation",
];

export const SubtaskData: SubtaskType[] = [
  {
    title: "Idea Thread",
    lastUpdate: "Loom - last Upadated 1d ago",
    linked: "Linked to IDT-36",
    icon: Settings,
  },
  {
    title: "Camping and comman plan",
    lastUpdate: "confluence - last Upadated 1d ago",
    linked: "Linked to IDT-36",
    icon: LocalFlorist,
  },
  {
    title: "Idea-Thread-frontend",
    lastUpdate: "bucket  - last Upadated 1d ago",
    linked: "Linked to IDT-36",
    icon: Settings,
  },
];

export const goals: Goal[] = [
  {
    goal: "Partnership expansion: Expand our network of marke...",
    status: "ON TRACK",
    score: 0.7,
    progress: "25",
    targetDate: "Jun",
    lastUpdate: "1 day ago",
  },
  {
    goal: "Partner identification and outreach",
    status: "ON TRACK",
    score: 0.7,
    progress: "25",
    targetDate: "Jun",
    lastUpdate: "3 weeks ago",
  },
  {
    goal: "Successfully onboard and integrate 500 new market...",
    status: "ON TRACK",
    score: 0.7,
    progress: "25",
    targetDate: "Jun",
    lastUpdate: "3 weeks ago",
  },
  {
    goal: "Strengthen partner relationships: Create and roll ...",
    status: "AT RISK",
    score: 0.5,
    progress: "25",
    targetDate: "Jun",
    lastUpdate: "4 days ago",
  },
  {
    goal: "Identify and reach out to 800 potential marketplace...",
    status: "ON TRACK",
    score: 0.7,
    progress: "75",
    targetDate: "May 2024",
    lastUpdate: "5 hours ago",
  },
  {
    goal: "Awareness and promotion - Launch a comprehensiv...",
    status: "ON TRACK",
    score: 0.7,
    progress: "50",
    targetDate: "Jul – Sep",
    lastUpdate: "29 mins ago",
  },
  {
    goal: "Upgrade to React 18",
    status: "ON TRACK",
    score: 0.7,
    progress: "50",
    targetDate: "Jun 2024",
    lastUpdate: "1 month ago",
  },
  {
    goal: "Increase social impact: Grow Idea Thread charitable...",
    status: "ON TRACK",
    score: 0.7,
    progress: "25",
    targetDate: "Jun",
    lastUpdate: "3 weeks ago",
  },
  {
    goal: "[KR2] 879 Cloud Migration Campaigns",
    status: "ON TRACK",
    score: 0.7,
    progress: "25",
    targetDate: "Jun",
    lastUpdate: "2 weeks ago",
  },
  {
    goal: "[KR2] 72% Cloud Choice Rate",
    status: "ON TRACK",
    score: 0.7,
    progress: "25",
    targetDate: "Jun",
    lastUpdate: "2 weeks ago",
  },
  {
    goal: "[KR1.2] [Jira DC] Majority of Jira DC libraries are ma...",
    status: "ON TRACK",
    score: 0.7,
    progress: "25",
    targetDate: "Jun",
    lastUpdate: "2 days ago",
  },
  {
    goal: "Increase sales: Increase sales by 350% YOY for chil...",
    status: "OFF TRACK",
    score: 0.2,
    progress: "50",
    targetDate: "Jun",
    lastUpdate: "6 days ago",
  },
  {
    goal: "Market analysis to meet trends",
    status: "ON TRACK",
    score: 0.7,
    progress: "25",
    targetDate: "Jun",
    lastUpdate: "1 year ago",
  },
];
