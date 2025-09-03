import { LocalFlorist, Settings } from "@mui/icons-material";
import type { SubtaskType } from "../types/SubtaskType";
import type { Goal } from "../types/GoalType";
import type { Project } from "../types/Project";
import type { issueColumns, IssueRow } from "../types/IssueType";

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

export const issueButtonTitle: string[] = [
  "Assignee",
  "Reporter",
  "Status",
  "Type",
  "Status Category",
];

export const issues: IssueRow[] = [
  {
    key: "NUC-201",
    type: "Bug",
    summary: "Login button unresponsive on Safari browser",
    assignee: {
      id: "u1",
      name: "Hassana Ajayi",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u2",
      name: "Andres Ramos",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
  {
    key: "NUC-202",
    type: "Task",
    summary: "Add unit tests for authentication service",
    assignee: {
      id: "u3",
      name: "Andres Ramos",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u4",
      name: "Jie Yan Song",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-203",
    type: "Bug",
    summary: "API returning 500 error when fetching projects",
    assignee: {
      id: "u5",
      name: "Michael Zhang",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u6",
      name: "Emily Carter",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-204",
    type: "Task",
    summary: "Refactor dashboard components for better readability",
    assignee: {
      id: "u7",
      name: "Carlos Mendoza",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u8",
      name: "Sophia Lee",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
  {
    key: "NUC-205",
    type: "Bug",
    summary: "Dark mode styles not applied to navigation bar",
    assignee: {
      id: "u9",
      name: "Rajesh Kumar",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u10",
      name: "Maria Garcia",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-206",
    type: "Task",
    summary: "Update dependencies to latest stable versions",
    assignee: {
      id: "u11",
      name: "David Brown",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u12",
      name: "Olivia Wilson",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
  {
    key: "NUC-207",
    type: "Bug",
    summary: "Search input not clearing when reset button is clicked",
    assignee: {
      id: "u13",
      name: "James Anderson",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u14",
      name: "Sophia Lee",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-208",
    type: "Task",
    summary: "Design landing page for new product launch",
    assignee: {
      id: "u15",
      name: "Emma Thompson",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u16",
      name: "Lucas Miller",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
  {
    key: "NUC-209",
    type: "Bug",
    summary: "Dropdown menu flickers on hover in Firefox",
    assignee: {
      id: "u17",
      name: "Benjamin Davis",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u18",
      name: "Isabella Martinez",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-210",
    type: "Task",
    summary: "Implement CI/CD pipeline with GitHub Actions",
    assignee: {
      id: "u19",
      name: "William Clark",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u20",
      name: "Ava Johnson",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
  {
    key: "NUC-211",
    type: "Bug",
    summary: "Notifications not updating in real-time",
    assignee: {
      id: "u21",
      name: "Daniel Evans",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u22",
      name: "Sophia Lee",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-212",
    type: "Task",
    summary: "Create documentation for API endpoints",
    assignee: {
      id: "u23",
      name: "Liam Martinez",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u24",
      name: "Emily Carter",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
  {
    key: "NUC-213",
    type: "Bug",
    summary: "Profile picture upload fails for large files",
    assignee: {
      id: "u25",
      name: "Amir Hassan",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u26",
      name: "Hana Suzuki",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-214",
    type: "Task",
    summary: "Optimize database queries for dashboard metrics",
    assignee: {
      id: "u27",
      name: "Noah Kim",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u28",
      name: "Isabella Martinez",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
  {
    key: "NUC-215",
    type: "Bug",
    summary: "Sidebar overlaps footer on mobile devices",
    assignee: {
      id: "u29",
      name: "Charlotte Green",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u30",
      name: "William Clark",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-216",
    type: "Task",
    summary: "Set up monitoring with Grafana and Prometheus",
    assignee: {
      id: "u31",
      name: "Lucas White",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u32",
      name: "Ava Johnson",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
  {
    key: "NUC-217",
    type: "Bug",
    summary: "Form validation messages not displayed properly",
    assignee: {
      id: "u33",
      name: "Mia Roberts",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u34",
      name: "David Brown",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-218",
    type: "Task",
    summary: "Migrate legacy code to TypeScript",
    assignee: {
      id: "u35",
      name: "Harper Adams",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u36",
      name: "Michael Zhang",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
  {
    key: "NUC-219",
    type: "Bug",
    summary: "Pagination not working on activity logs",
    assignee: {
      id: "u37",
      name: "Oliver Scott",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u38",
      name: "Emma Thompson",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-220",
    type: "Task",
    summary: "Integrate payment gateway for subscriptions",
    assignee: {
      id: "u39",
      name: "Sofia Hernandez",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u40",
      name: "James Anderson",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
  {
    key: "NUC-221",
    type: "Bug",
    summary: "Search results not sorted correctly",
    assignee: {
      id: "u41",
      name: "Henry Cooper",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u42",
      name: "Sophia Turner",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-222",
    type: "Task",
    summary: "Implement dark mode toggle in settings",
    assignee: {
      id: "u43",
      name: "Ella Moore",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u44",
      name: "Daniel Evans",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
  {
    key: "NUC-223",
    type: "Bug",
    summary: "Mobile menu does not close after navigation",
    assignee: {
      id: "u45",
      name: "Grace Hall",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u46",
      name: "Liam Martinez",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-224",
    type: "Task",
    summary: "Set up automated email notifications",
    assignee: {
      id: "u47",
      name: "Ryan Foster",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u48",
      name: "Emma Davis",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
  {
    key: "NUC-225",
    type: "Bug",
    summary: "Dropdown filter resets on page reload",
    assignee: {
      id: "u49",
      name: "Oliver King",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u50",
      name: "Ava Johnson",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-226",
    type: "Task",
    summary: "Deploy staging environment on AWS",
    assignee: {
      id: "u51",
      name: "Chloe Adams",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u52",
      name: "Benjamin Davis",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
  {
    key: "NUC-227",
    type: "Bug",
    summary: "Form auto-save overwrites user input incorrectly",
    assignee: {
      id: "u53",
      name: "Lucas Perez",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u54",
      name: "Emily Carter",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-228",
    type: "Task",
    summary: "Add role-based access control",
    assignee: {
      id: "u55",
      name: "Amelia Scott",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u56",
      name: "Michael Zhang",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
  {
    key: "NUC-229",
    type: "Bug",
    summary: "File attachments not downloading on iOS",
    assignee: {
      id: "u57",
      name: "Jack Taylor",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
    reporter: {
      id: "u58",
      name: "Sophia Lee",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
  },
  {
    key: "NUC-230",
    type: "Task",
    summary: "Integrate single sign-on (SSO) authentication",
    assignee: {
      id: "u59",
      name: "Zoe Ramirez",
      avatarUrl:
        "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg",
    },
    reporter: {
      id: "u60",
      name: "William Clark",
      avatarUrl:
        "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
    },
  },
];
