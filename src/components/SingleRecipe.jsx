import React from "react";
import { Link } from "react-router";
import { FcLike } from "react-icons/fc";

const SingleRecipe = ({ recipe }) => {
  const { _id, image, cuisine, title, like, preparationTime } = recipe;
  return (
    <div className="border rounded-lg border-[#cccccc8c]">
      <figure>
        <img
          className="w-full rounded-lg h-[270px] object-cover"
          src={image}
          alt="recipe image"
        />
      </figure>
      <div className="px-4 py-3 space-y-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-g font-sembold">
            Cuisine Type: <span className="text-[#787777]">{cuisine}</span>
          </p>

          <p
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`${
              like == 0 ? "No" : like
            } people interested in this recipe`}
            className="flex items-center gap-1"
          >
            <FcLike size={20} />
            <span className="font-semibold">{like}</span>
          </p>
        </div>
        <p className="font-semibol">
          Preparation Time:{" "}
          <span className="text-[#ccccc8c]">{preparationTime} min</span>
        </p>
        <Link to={`/recipe/${_id}`}>
          <button className="btn btn-warning">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleRecipe;
