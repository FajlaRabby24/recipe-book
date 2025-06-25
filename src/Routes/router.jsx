import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import AddRecipe from "../pages/AddRecipe";
import AllFeedback from "../pages/AllFeedback";
import AllRecipe from "../pages/AllRecipe";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyRecipe from "../pages/MyRecipe";
import NotFound from "../pages/NotFound";
import RecipeDetails from "../pages/RecipeDetails";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch(`${VITE_root_api_url}/top-recipes`),
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
        loader: () => fetch(`${VITE_root_api_url}/all-recipe`),
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
        loader: () => fetch(`${VITE_root_api_url}/feedbacks`),
        element: (
          <PrivateRoute>
            <AllFeedback />
          </PrivateRoute>
        ),
      },

      {
        path: "recipe/:id",
        loader: ({ params }) =>
          fetch(`${VITE_root_api_url}/recipe/${params.id}`),
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
