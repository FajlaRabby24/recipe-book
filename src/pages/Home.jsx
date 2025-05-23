import React from "react";
import Hero from "../components/Hero";
import TopRecipes from "../layout/TopRecipes";
import { useLoaderData } from "react-router";
import VegiesFood from "../layout/VegiesFood";
import Feedback from "../layout/Feedback";

const Home = () => {
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
