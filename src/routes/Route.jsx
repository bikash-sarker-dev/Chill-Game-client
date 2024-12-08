import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddReviewPage from "../pages/AddReviewPage";
import AllReviewsPage from "../pages/AllReviewsPage";
import ErrorPage from "../pages/ErrorPage";
import GameWatchListPage from "../pages/GameWatchListPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyReviewsPage from "../pages/MyReviewsPage";
import RegisterPage from "../pages/RegisterPage";
import ReviewDetailsPage from "../pages/ReviewDetailsPage";
import UpdateReviewPage from "../pages/UpdateReviewPage";
import PrivateAddReviewsRoute from "./PrivateAddReviewsRoute";
import PrivateMyReviewsRoute from "./PrivateMyReviewsRoute";
import PrivateWatchListRoute from "./PrivateWatchListRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        loader: () =>
          fetch(
            "https://chill-gamer-server-ten.vercel.app/reviews/highest-rated"
          ),
      },
      {
        path: "/all-reviews",
        element: <AllReviewsPage />,
        errorElement: <ErrorPage />,
        loader: () =>
          fetch("https://chill-gamer-server-ten.vercel.app/reviews"),
      },
      {
        path: "/details/:id",
        element: <ReviewDetailsPage />,
        errorElement: <ErrorPage />,
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-ten.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/add-review",
        errorElement: <ErrorPage />,
        element: (
          <PrivateAddReviewsRoute>
            <AddReviewPage />
          </PrivateAddReviewsRoute>
        ),
      },
      {
        path: "/my-reviews",
        errorElement: <ErrorPage />,
        element: (
          <PrivateMyReviewsRoute>
            <MyReviewsPage />
          </PrivateMyReviewsRoute>
        ),
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReviewPage />,
        errorElement: <ErrorPage />,
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-ten.vercel.app/update/${params.id}`
          ),
      },
      {
        path: "/watchlist",
        errorElement: <ErrorPage />,
        element: (
          <PrivateWatchListRoute>
            <GameWatchListPage />
          </PrivateWatchListRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
