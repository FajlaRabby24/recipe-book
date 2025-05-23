import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllRecipe from "../pages/AllRecipe";
import MyRecipe from "../pages/MyRecipe";
import AddRecipe from "../pages/AddRecipe";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import RecipeDetails from "../pages/RecipeDetails";
import Feedback from "../layout/Feedback";
import AllFeedback from "../pages/AllFeedback";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch(`https://recipe-book-server-mocha.vercel.app/top-recipes`),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "all-recipe",
        Component: AllRecipe,
        loader: () =>
          fetch("https://recipe-book-server-mocha.vercel.app/all-recipe"),
      },
      {
        path: "my-recipe",
        element: (
          <PrivateRoute>
            <MyRecipe />
          </PrivateRoute>
        ),
      },
      {
        path: "add-recipe",
        element: (
          <PrivateRoute>
            <AddRecipe />
          </PrivateRoute>
        ),
      },
      {
        path: "allFeedback",
        loader: () =>
          fetch(`https://recipe-book-server-mocha.vercel.app/feedbacks`),
        element: (
          <PrivateRoute>
            <AllFeedback />
          </PrivateRoute>
        ),
      },

      {
        path: "recipe/:id",
        loader: ({ params }) =>
          fetch(
            `https://recipe-book-server-mocha.vercel.app/recipe/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <RecipeDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
