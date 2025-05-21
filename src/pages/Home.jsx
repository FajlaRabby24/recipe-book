import React from "react";
import Hero from "../components/Hero";
import TopRecipes from "../layout/TopRecipes";
import { useLoaderData } from "react-router";

const Home = () => {
  const topRecipes = useLoaderData();
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <TopRecipes topRecipes={topRecipes} />
    </div>
  );
};

export default Home;
