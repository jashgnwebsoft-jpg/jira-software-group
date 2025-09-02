import { LocalFlorist, Settings } from "@mui/icons-material";
import type { SubtaskType } from "../types/SubtaskType";
import type { Goal } from "../types/GoalType";
import type { Project } from "../types/Project";
import type { issueColumns } from "../types/IssueType";

export const childIssueData: string[] = [
  "Design website UX",
  "Develop website frontend",
  "Connect to payment platform",
  "Write copy & prepare assets",
  "Conduct launch preparation",
];

export const subtaskData: SubtaskType[] = [
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

export const navbarData: string[] = [
  "Your work",
  "Projects",
  "Filters",
  "Dashboard",
  "People",
  "Plans",
  "Apps",
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Content Design",
    key: "CD",
    type: "Company-managed software",
    lead: { name: "Rachel Tang", avatar: "https://i.pravatar.cc/40?img=1" },
  },
  {
    id: 2,
    name: "Customer Experience",
    key: "CX",
    type: "Team-managed software",
    lead: { name: "Jessie Spiteri", avatar: "https://i.pravatar.cc/40?img=2" },
  },
  {
    id: 3,
    name: "Launch Planning",
    key: "LP",
    type: "Team-managed software",
    lead: {
      name: "Yves-Emmanuel Jutard",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
  },
  {
    id: 4,
    name: "Mario's World",
    key: "MW",
    type: "Company-managed software",
    lead: { name: "Rachel Tang", avatar: "https://i.pravatar.cc/40?img=1" },
  },
  {
    id: 5,
    name: "Marketing Campaign",
    key: "MC",
    type: "Company-managed software",
    lead: { name: "Rachel Tang", avatar: "https://i.pravatar.cc/40?img=1" },
  },
  {
    id: 6,
    name: "Mobile Development",
    key: "MD",
    type: "Team-managed software",
    lead: { name: "Bella Shields", avatar: "https://i.pravatar.cc/40?img=4" },
  },
  {
    id: 7,
    name: "Onboarding",
    key: "ON",
    type: "Company-managed software",
    lead: { name: "Rachel Tang", avatar: "https://i.pravatar.cc/40?img=1" },
  },
  {
    id: 8,
    name: "Space Cafe",
    key: "SC",
    type: "Team-managed software",
    lead: { name: "Emily Chan", avatar: "https://i.pravatar.cc/40?img=5" },
  },
  {
    id: 9,
    name: "Team Retreat",
    key: "TR",
    type: "Team-managed software",
    lead: { name: "Bella Shields", avatar: "https://i.pravatar.cc/40?img=4" },
  },
];

export const issueColumnsData: readonly issueColumns[] = [
  { id: "type", label: "Type", width: 30 },
  { id: "key", label: "Key", width: 30 },
  { id: "summary", label: "Summary", width: 350 },
  { id: "assignee", label: "Assignee", width: 70 },
  { id: "reporter", label: "Reporter", width: 100, align: "left" },
];
