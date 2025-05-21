import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 backdrop-blur-2xl">
        <Header />
      </header>
      <main className="max-w-7xl mx-auto min-h-[calc(100vh-402px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
