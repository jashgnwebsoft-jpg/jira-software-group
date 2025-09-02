
export type User = {
  id: string;
  name: string;
  avatarUrl: string;
};

export type IssueRow = {
  key: string ;     
  type: string;    
  summary: string;    
  assignee?: User;    
  reporter: User;     
};

export const issues: IssueRow[] = [
  {
    key: "NUC-201",
    type: "Bug",
    summary: "Login button unresponsive on Safari browser",
    assignee: {
      id: "u1",
      name: "Hassana Ajayi",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u2",
      name: "Andres Ramos",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  },
  {
    key: "NUC-202",
    type: "Task",
    summary: "Add unit tests for authentication service",
    assignee: {
      id: "u3",
      name: "Andres Ramos",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u4",
      name: "Jie Yan Song",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-203",
    type: "Bug",
    summary: "API returning 500 error when fetching projects",
    assignee: {
      id: "u5",
      name: "Michael Zhang",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u6",
      name: "Emily Carter",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-204",
    type: "Task",
    summary: "Refactor dashboard components for better readability",
    assignee: {
      id: "u7",
      name: "Carlos Mendoza",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u8",
      name: "Sophia Lee",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  },
  {
    key: "NUC-205",
    type: "Bug",
    summary: "Dark mode styles not applied to navigation bar",
    assignee: {
      id: "u9",
      name: "Rajesh Kumar",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u10",
      name: "Maria Garcia",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-206",
    type: "Task",
    summary: "Update dependencies to latest stable versions",
    assignee: {
      id: "u11",
      name: "David Brown",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u12",
      name: "Olivia Wilson",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  },
  {
    key: "NUC-207",
    type: "Bug",
    summary: "Search input not clearing when reset button is clicked",
    assignee: {
      id: "u13",
      name: "James Anderson",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u14",
      name: "Sophia Lee",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-208",
    type: "Task",
    summary: "Design landing page for new product launch",
    assignee: {
      id: "u15",
      name: "Emma Thompson",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u16",
      name: "Lucas Miller",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  },
  {
    key: "NUC-209",
    type: "Bug",
    summary: "Dropdown menu flickers on hover in Firefox",
    assignee: {
      id: "u17",
      name: "Benjamin Davis",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u18",
      name: "Isabella Martinez",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-210",
    type: "Task",
    summary: "Implement CI/CD pipeline with GitHub Actions",
    assignee: {
      id: "u19",
      name: "William Clark",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u20",
      name: "Ava Johnson",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  },
  {
    key: "NUC-211",
    type: "Bug",
    summary: "Notifications not updating in real-time",
    assignee: {
      id: "u21",
      name: "Daniel Evans",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u22",
      name: "Sophia Lee",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-212",
    type: "Task",
    summary: "Create documentation for API endpoints",
    assignee: {
      id: "u23",
      name: "Liam Martinez",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u24",
      name: "Emily Carter",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  },
  {
    key: "NUC-213",
    type: "Bug",
    summary: "Profile picture upload fails for large files",
    assignee: {
      id: "u25",
      name: "Amir Hassan",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u26",
      name: "Hana Suzuki",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-214",
    type: "Task",
    summary: "Optimize database queries for dashboard metrics",
    assignee: {
      id: "u27",
      name: "Noah Kim",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u28",
      name: "Isabella Martinez",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  },
  {
    key: "NUC-215",
    type: "Bug",
    summary: "Sidebar overlaps footer on mobile devices",
    assignee: {
      id: "u29",
      name: "Charlotte Green",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u30",
      name: "William Clark",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-216",
    type: "Task",
    summary: "Set up monitoring with Grafana and Prometheus",
    assignee: {
      id: "u31",
      name: "Lucas White",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u32",
      name: "Ava Johnson",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  },
  {
    key: "NUC-217",
    type: "Bug",
    summary: "Form validation messages not displayed properly",
    assignee: {
      id: "u33",
      name: "Mia Roberts",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u34",
      name: "David Brown",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-218",
    type: "Task",
    summary: "Migrate legacy code to TypeScript",
    assignee: {
      id: "u35",
      name: "Harper Adams",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u36",
      name: "Michael Zhang",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  },
  {
    key: "NUC-219",
    type: "Bug",
    summary: "Pagination not working on activity logs",
    assignee: {
      id: "u37",
      name: "Oliver Scott",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u38",
      name: "Emma Thompson",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-220",
    type: "Task",
    summary: "Integrate payment gateway for subscriptions",
    assignee: {
      id: "u39",
      name: "Sofia Hernandez",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u40",
      name: "James Anderson",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  },
  {
    key: "NUC-221",
    type: "Bug",
    summary: "Search results not sorted correctly",
    assignee: {
      id: "u41",
      name: "Henry Cooper",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u42",
      name: "Sophia Turner",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-222",
    type: "Task",
    summary: "Implement dark mode toggle in settings",
    assignee: {
      id: "u43",
      name: "Ella Moore",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u44",
      name: "Daniel Evans",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  },
  {
    key: "NUC-223",
    type: "Bug",
    summary: "Mobile menu does not close after navigation",
    assignee: {
      id: "u45",
      name: "Grace Hall",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u46",
      name: "Liam Martinez",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-224",
    type: "Task",
    summary: "Set up automated email notifications",
    assignee: {
      id: "u47",
      name: "Ryan Foster",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u48",
      name: "Emma Davis",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  },
  {
    key: "NUC-225",
    type: "Bug",
    summary: "Dropdown filter resets on page reload",
    assignee: {
      id: "u49",
      name: "Oliver King",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u50",
      name: "Ava Johnson",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-226",
    type: "Task",
    summary: "Deploy staging environment on AWS",
    assignee: {
      id: "u51",
      name: "Chloe Adams",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u52",
      name: "Benjamin Davis",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  },
  {
    key: "NUC-227",
    type: "Bug",
    summary: "Form auto-save overwrites user input incorrectly",
    assignee: {
      id: "u53",
      name: "Lucas Perez",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u54",
      name: "Emily Carter",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-228",
    type: "Task",
    summary: "Add role-based access control",
    assignee: {
      id: "u55",
      name: "Amelia Scott",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u56",
      name: "Michael Zhang",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  },
  {
    key: "NUC-229",
    type: "Bug",
    summary: "File attachments not downloading on iOS",
    assignee: {
      id: "u57",
      name: "Jack Taylor",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    },
    reporter: {
      id: "u58",
      name: "Sophia Lee",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    }
  },
  {
    key: "NUC-230",
    type: "Task",
    summary: "Integrate single sign-on (SSO) authentication",
    assignee: {
      id: "u59",
      name: "Zoe Ramirez",
      avatarUrl: "https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg"
    },
    reporter: {
      id: "u60",
      name: "William Clark",
      avatarUrl: "https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg"
    }
  }

  
];

