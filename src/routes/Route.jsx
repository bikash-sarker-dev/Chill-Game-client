import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddReviewPage from "../pages/AddReviewPage";
import AllReviewsPage from "../pages/AllReviewsPage";
import GameWatchListPage from "../pages/GameWatchListPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyReviewsPage from "../pages/MyReviewsPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/all-reviews",
        element: <AllReviewsPage />,
      },
      {
        path: "/add-review",
        element: <AddReviewPage />,
      },
      {
        path: "/my-reviews",
        element: <MyReviewsPage />,
      },
      {
        path: "/watchlist",
        element: <GameWatchListPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
