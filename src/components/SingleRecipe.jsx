import React from "react";
import { Link } from "react-router";
import { FcLike } from "react-icons/fc";

const SingleRecipe = ({ recipe }) => {
  const { _id, image, selectedCategories, title, like } = recipe;
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
        <div className="grid grid-cols-3 gap-2 flex-wrap">
          {selectedCategories.map((category, index) => (
            <p key={index} className="flex gap-1 ">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-primary checkbox-xs"
              />
              <span>{category}</span>
            </p>
          ))}
        </div>
        <div className="card-actions justify-end mt-6">
          <Link to={`/recipe-details/${_id}`}>
            <button className="btn btn-warning px-9">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
