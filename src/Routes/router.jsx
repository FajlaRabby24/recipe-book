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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
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
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
