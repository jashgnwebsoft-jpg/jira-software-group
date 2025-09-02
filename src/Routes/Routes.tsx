import { createBrowserRouter } from "react-router";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import Index from "../pages";
import SubtaskView from "../pages/subtask/SubtaskView";
import GoalPageView from "../pages/goal/GoalPageView";
import ProjectView from "../pages/projects/ProjectView";
import IssueView from "../pages/issue/IssueView";

const router = createBrowserRouter([
  {
    path: "*",
    Component: NotFoundPage,
  },
  {
    path: "jira",
    Component: Index,
    children: [
      { index: true, Component: ProjectView },
      { path: "subtaskview", Component: SubtaskView },
      { path: "goal", Component: GoalPageView },
      { path: "project", Component: IssueView },
    ],
  },
]);
export default router;
