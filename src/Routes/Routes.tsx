import { createBrowserRouter } from "react-router";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import Index from "../pages";
import SubtaskView from "../pages/subtask/SubtaskView";
import GoalPageView from "../pages/goal/GoalPageView";
import Home from "../pages/home/Home";
import ProjectList from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "*",
    Component: NotFoundPage,
  },
  {
    path: "jira",
    Component: Index,
    children: [
      { index: true, Component: Home },
      { path: "subtaskview", Component: SubtaskView },
      { path: "goal", Component: GoalPageView },
      { path: "project" , Component: ProjectList}
    ],
  },
]);
export default router;
