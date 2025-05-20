import React from "react";
import { useLoaderData } from "react-router";
import SingleRecipe from "../components/SingleRecipe";

const AllRecipe = () => {
  const allRecipe = useLoaderData();
  console.log(allRecipe);
  return (
    <div className="pt-12 pb-52">
      <h1 className="text-3xl font-semibold mb-6">All Recipe</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allRecipe.map((recipe) => (
          <SingleRecipe key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipe;
