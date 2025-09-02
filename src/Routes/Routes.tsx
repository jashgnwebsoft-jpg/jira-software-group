import { createBrowserRouter } from "react-router";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import Index from "../pages";
import SubtaskView from "../pages/subtask/SubtaskView";
import GoalPageView from "../pages/goal/GoalPageView";

const router = createBrowserRouter([
  {
    path: "*",
    Component: NotFoundPage,
  },
  {
    path: "jira",
    Component: Index,
    children: [
      { path: "subtaskview", Component: SubtaskView },
      { path: "goal", Component: GoalPageView },
    ],
  },
]);
export default router;
