import { useLoaderData } from "react-router";
import Hero from "../components/Hero";
import useTitle from "../hooks/useTitle";
import Feedback from "../layout/Feedback";
import TopRecipes from "../layout/TopRecipes";
import VegiesFood from "../layout/VegiesFood";

const Home = () => {
  useTitle("Recipe Book");

  const topRecipes = useLoaderData();
  return (
    <div className="flex flex-col gap-52" style={{ overflowX: "hidden" }}>
      <Hero />
      <TopRecipes topRecipes={topRecipes} />
      <VegiesFood />
      <Feedback />
    </div>
  );
};

export default Home;
