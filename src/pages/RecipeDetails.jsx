import React, { use, useState } from "react";
import { FcLike } from "react-icons/fc";
import { useLoaderData, useNavigate } from "react-router";
import useScrollToTop from "../hooks/useScrollToTop";
import useTitle from "../hooks/useTitle";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { AuthContext } from "../store/contexts";

const RecipeDetails = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);

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
  const [liked, setLiked] = useState(parseInt(like));
  const isOwnRecipe = recipe.email === user.email;
  console.log(isOwnRecipe);

  const handleLike = (id) => {
    const newLikeCount = liked + 1;
    setLiked(newLikeCount);

    fetch(`http://localhost:5000/update-like/${id}?like=${newLikeCount}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after patch", data);
      });
    console.log("after", liked);
  };

  return (
    <div className="px-3 pb-40  pt-10 ">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-warning mb-4 gap-0 flex justify-start"
      >
        <MdKeyboardArrowLeft size={15} /> Back
      </button>
      <div className=" border border-[#cccccca0] rounded-lg  flex flex-col md:flex-row md:gap-2 8">
        <figure className="lg:w-1/3 ">
          <img
            src={image}
            className="md:max-w-[354px]  lg:min-w-full w-full  rounded-lg h-full l:max-h-[350px] md:min-w-[354px] min-h-[350px] object-cover "
            alt="recipe image"
          />
        </figure>
        <div className="lg:w-2/3 px-2 pt-5 pb-5 md:py-5  lg:pr-5 space-y-2 ">
          <div className="flex items-center flex-wrap gap-3 lg:gap-10">
            <h1 className="text-2xl font-semibold">{title}</h1>{" "}
            <p
              data-tooltip-id="my-tooltip"
              data-tooltip-content={`${
                like == 0 ? "No" : like
              } people interested in this recipe`}
              className="flex items-center gap-1"
            >
              <FcLike size={20} />
              <span className="font-semibold">{liked}</span>
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
            Preparation time:{" "}
            <span className="font-normal text-[#787777]">
              {preparationTime} min
            </span>
          </p>

          <div className="flex gap-3 flex-wrap">
            {selectedCategories.map((category, index) => (
              <p key={index} className="flex gap-1 ">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="checkbox checkbox-primary checkbox-xs cursor-text"
                />
                <span>{category}</span>
              </p>
            ))}
          </div>
          <p className="font-semibold">
            Creation time:{" "}
            <span className="font-normal text-[#787777]">{creationTime}</span>
          </p>
          <button
            disabled={isOwnRecipe}
            onClick={() => handleLike(_id)}
            className="btn"
          >
            <FcLike size={20} /> Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
