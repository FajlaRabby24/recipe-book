import React from "react";
import { Link } from "react-router";
import { FcLike } from "react-icons/fc";

const SingleRecipe = ({ recipe }) => {
  const { _id, image, cuisine, title, like } = recipe;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img src={image} alt={`${title} image`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="flex items-center gap-1">
          <FcLike size={20} />
          <span className="font-semibold">{like}</span>
        </p>
        <p className="font-semibold">Cuisine type: {cuisine}</p>
        <div className="card-actions justify-end mt-6">
          <Link to={`/recipe/${_id}`}>
            <button className="btn btn-warning px-9">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
