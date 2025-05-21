import React from "react";
import { FcLike } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const MyRecipeDetails = ({ recipe }) => {
  const {
    _id,
    image,
    creationTime,
    cuisine,
    ingredients,
    instructions,
    like,
    title,
  } = recipe;

  /**
 * Image.
Title.
Ingredients.
Instructions.
Cuisine Type
Preparation Time
Category
Like count.
Update button.
Delete button.
Clicking the delete b

 */

  return (
    <div className=" border border-[#cccccca0] rounded-lg flex lg:flex-row gap-8">
      <figure className="w-1/3 ">
        <img
          src={image}
          className="max-w-[415px] max-h-[350px] min-w-[415px] min-h-[350px] object-cover "
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
          Creation time:{" "}
          <span className="font-normal text-[#787777]">{creationTime}</span>
        </p>

        <div className="flex items-center gap-2">
          <button className="btn">
            <FcLike size={20} /> Like
          </button>
          <button className="btn">
            <MdDelete size={20} /> Delete
          </button>
          <button className="btn">
            <FaEdit size={20} /> Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyRecipeDetails;
