import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import Dialog from "../UI/Diolog";

const MyRecipeDetails = ({ recipe, handleDeleteRecipeInUI }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleDeleteRecipe = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://recipe-book-server-mocha.vercel.app/recipe/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              handleDeleteRecipeInUI(id);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className=" border border-[#cccccca0] rounded-lg  flex flex-col md:flex-row md:gap-2 8">
      <Tooltip id="my-tooltip" />
      <figure className="lg:w-1/3 ">
        <img
          src={image}
          className="md:max-w-[354px]  lg:min-w-full w-full  rounded-lg h-full l:max-h-[350px] md:min-w-[354px] min-h-[350px] object-cover "
          alt="recipe image"
        />
      </figure>
      <div className="md:w-2/3 py-5 px-2 lg:pr-5 space-y-2 ">
        <div className="flex items-center flex-wrap gap-2 lg:gap-10">
          <h1 className="text-2xl font-semibold">{title}</h1>{" "}
          <p
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`${
              like == 0 ? "No" : like
            } people interested in this recipe`}
            className="flex items-center gap-1"
          >
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
        {recipe?.updatedTime && (
          <p className="font-semibold">
            Last update:{" "}
            <span className="font-normal text-[#787777]">
              {recipe?.updatedTime}
            </span>
          </p>
        )}

        <div className="flex items-center gap-2">
          <button
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Delete recipe"
            onClick={() => handleDeleteRecipe(_id)}
            className="btn btn-outline btn-warning"
          >
            <MdDelete size={20} /> Delete
          </button>
          <button
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Update recipe"
            onClick={handleModal}
            className="btn btn-warning"
          >
            <FaEdit size={20} /> Update
          </button>
          {isModalOpen && (
            <Dialog
              isModalOpen={isModalOpen}
              recipe={recipe}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRecipeDetails;
