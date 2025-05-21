import React from "react";

const NoRecipe = () => {
  return (
    <div className="flex justify-center pt-16">
      <div className="">
        <h1 className="text-2xl font-semibold text-center mb-1">
          No Recipe Found!
        </h1>
        <p className="font-semibold">Please choose another Cuisine!</p>
      </div>
    </div>
  );
};

export default NoRecipe;
