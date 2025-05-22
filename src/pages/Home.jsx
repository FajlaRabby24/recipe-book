import React from "react";
import Hero from "../components/Hero";
import TopRecipes from "../layout/TopRecipes";
import { useLoaderData } from "react-router";
import HealthTips from "../layout/HealthTips";
import VegiesFood from "../layout/VegiesFood";

const Home = () => {
  const topRecipes = useLoaderData();
  return (
    <div className="flex flex-col gap-52">
      <Hero />
      <TopRecipes topRecipes={topRecipes} />
      <VegiesFood />
      <HealthTips />
    </div>
  );
};

export default Home;
