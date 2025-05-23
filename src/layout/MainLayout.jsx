import { Outlet, useLocation, useNavigation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Tooltip } from "react-tooltip";
import Loading from "../components/Loading";
import { useState } from "react";

const MainLayout = () => {
  const navigation = useNavigation();
  const location = useLocation();

  const nextLocation = navigation.location;
  const isNavigateToNewRoute =
    nextLocation && nextLocation.pathname !== location.pathname;
  const isLoading = navigation.state === "loading" && isNavigateToNewRoute;

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <header className="sticky top-0 z-50 backdrop-blur-2xl">
        <Header />
      </header>
      <main className="max-w-7xl mx-auto min-h-[calc(100vh-402px)]">
        {isLoading ? <Loading /> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
