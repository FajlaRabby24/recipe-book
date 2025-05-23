import React, { use } from "react";
import { AuthContext } from "../store/contexts";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const locaiton = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to={"/login"} state={locaiton.pathname} />;
  }

  return children;
};

export default PrivateRoute;
