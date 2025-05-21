import React from "react";
import { FcLike } from "react-icons/fc";
import { useLoaderData } from "react-router";
import useScrollToTop from "../hooks/useScrollToTop";
import useTitle from "../hooks/useTitle";

const RecipeDetails = () => {
  useScrollToTop();
  useTitle("Recipe details");

  const recipe = useLoaderData();
  const {
    _id,
    image,
    creationTime,
    cuisine,
    ingredients,
    instructions,
    like,
    preparationTime,
    selectedCategories,
    title,
  } = recipe;

  return (
    <div className=" mt-20 border border-[#cccccca0] rounded-lg flex lg:flex-row gap-8">
      <figure className="w-1/3 ">
        <img
          src={image}
          className="w-full object-cover h-full"
          alt="recipe image"
        />
      </figure>
      <div className="w-2/3 py-5 pr-5 space-y-2 ">
        <div className="flex items-center flex-wrap gap-10">
          <h1 className="text-2xl font-semibold">{title}</h1>{" "}
          <p className="flex items-center gap-1">
            <FcLike size={20} />
            <span className="font-semibold">{like}</span>
            <span> people interested in this recipe</span>
          </p>
        </div>
        <p className="font-semibold">
          Cuisine type:{" "}
          <span className="font-normal text-[#787777]">{cuisine}</span>
        </p>
        <p className="font-semibold">
          Ingredients:{" "}
          <span className="font-normal text-[#787777]">{ingredients}</span>
        </p>
        <p className="font-semibold">
          Instructions:{" "}
          <span className="font-normal text-[#787777]">{instructions}</span>
        </p>
        <p className="font-semibold">
          Instructions:{" "}
          <span className="font-normal text-[#787777]">{instructions}</span>
        </p>
        <p className="font-semibold">
          Preparation time:{" "}
          <span className="font-normal text-[#787777]">{preparationTime}</span>
        </p>

        <div className="grid grid-cols-3 gap-2 flex-wrap">
          {selectedCategories.map((category, index) => (
            <p key={index} className="flex gap-1 ">
              <input
                type="checkbox"
                checked
                readOnly
                className="checkbox checkbox-primary checkbox-xs"
              />
              <span>{category}</span>
            </p>
          ))}
        </div>
        <p className="font-semibold">
          Creation time:{" "}
          <span className="font-normal text-[#787777]">{creationTime}</span>
        </p>
        <button className="btn">
          <FcLike size={20} /> Like
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
