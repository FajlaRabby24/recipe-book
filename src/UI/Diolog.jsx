import React, { use, useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { AuthContext } from "../store/contexts";
import { format } from "date-fns";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "1000px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Dialog = ({ isModalOpen, setIsModalOpen, recipe }) => {
  const {
    _id,
    image,
    cuisine,
    ingredients,
    instructions,
    like,
    creationTime,
    preparationTime,
    title,
    selectedCategories,
  } = recipe;

  const { user } = use(AuthContext);
  const categories = ["Breakfast", "lunch", "Dinner", "Vegan", "Desser"];
  const [updatedCategories, setUpdatedCategories] =
    useState(selectedCategories);
  const [error, setError] = useState("");

  const handleAUpdateRecipe = (e) => {
    e.preventDefault();

    setError("");
    if (!updatedCategories.length) {
      return setError("Select at least one categories!");
    }

    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const preparationTime = form.preparationtime.value;
    const instructions = form.instructions.value;
    const ingredients = form.ingredients.value;
    const like = form.like.value;
    const cuisine = form.cuisine.value;
    const email = user.email;
    const updatedTime = format(new Date(), "E, p, PP");
    const updatedRecipe = {
      title,
      image,
      creationTime,
      preparationTime,
      instructions,
      ingredients,
      like,
      cuisine,
      email,
      updatedTime,
      selectedCategories: updatedCategories,
    };

    fetch(`http://localhost:5000/update-recipe/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          toast.success("Recipe updated successfully!");
          setIsModalOpen(false);
        }
      });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setUpdatedCategories((prev) => [...prev, value]);
      setError("");
    } else {
      setUpdatedCategories((prev) => prev.filter((item) => item !== value));
    }
  };

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h1 className="text-3xl pb-5 font-semibold text-center">
          Update Recipe
        </h1>
        <form
          className=" border border-[#cccccc9c] rounded-lg  px-4 py-3"
          onSubmit={handleAUpdateRecipe}
        >
          <div className="flex gap-5">
            <div className="bg-mber-100 w-1/2">
              {/* title  */}
              <legend className="fieldset-legend ">Title</legend>
              <input
                type="text"
                required
                name="title"
                defaultValue={title}
                className="input w-full"
                placeholder="Title..."
              />
              {/* Cuisine  type  */}
              <legend className="fieldset-legend ">Cuisine type</legend>
              <select
                name="cuisine"
                defaultValue={cuisine}
                className="select w-full"
              >
                <option disabled={true}>Cuisine type</option>
                <option value={"Italian"}>Italian</option>
                <option value={"Mexican"}>Mexican</option>
                <option value={"Chinese"}>Chinese</option>
                <option value={"Bangladesh"}>Bangladesh</option>
              </select>

              {/* Categories    */}
              <legend className="fieldset-legend mt-2">Categories </legend>
              <fieldset className="space-x-2 w-full">
                {categories.map((category) => (
                  <label key={category} className="cursor-pointer">
                    <input
                      className="checkbox mr-1  checkbox-primary checkbox-xs"
                      type="checkbox"
                      value={category}
                      defaultChecked={selectedCategories.includes(category)}
                      onChange={handleCheckboxChange}
                    />
                    {category}
                  </label>
                ))}
                {error && <p className="text-red-500">{error}</p>}
              </fieldset>
              {/* Instructions  */}
              <legend className="fieldset-legend mt-2">Instructions</legend>
              <textarea
                required
                name="instructions"
                className="textarea h-20 w-full resize-none"
                placeholder="Instructions...."
                defaultValue={instructions}
              ></textarea>
            </div>
            <div className="bgamber-100 w-1/2">
              {/* image  */}
              <legend className="fieldset-legend">Image</legend>
              <input
                type="url"
                name="image"
                required
                placeholder="https://"
                defaultValue={image}
                className="input w-full"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                title="Must be valid URL"
              />
              {/* preparation time  */}
              <legend className="fieldset-legend mt-2">Preparation time</legend>
              <input
                type="number"
                required
                name="preparationtime"
                defaultValue={preparationTime}
                className="input w-full"
                placeholder="Preparation time..."
              />
              {/* like  */}
              <legend className="fieldset-legend mt-2">Like</legend>
              <input
                type="text"
                value={like}
                name="like"
                className="input w-full"
                readOnly
              />
              {/* Ingredients  */}
              <legend className="fieldset-legend mt-2">Ingredients</legend>
              <textarea
                required
                name="ingredients"
                className="textarea h-20 w-full resize-none"
                placeholder="Ingredients"
                defaultValue={ingredients}
              ></textarea>
            </div>
          </div>
          <button className="btn btn-block mt-5 btn-warning ">
            Update Recipe
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Dialog;
