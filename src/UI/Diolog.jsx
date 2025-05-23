import { format } from "date-fns";
import { use, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { AuthContext } from "../store/contexts";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
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

    fetch(`https://recipe-book-server-mocha.vercel.app/update-recipe/${_id}`, {
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
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="bg-base-100  rounded-lg w-[95vw] max-w-5xl p-4 md:p-6 overflow-y-auto max-h-[90vh]">
        <h1 className="text-2xl md:text-3xl pt-5 pb-6 font-semibold text-center">
          Update Recipe
        </h1>
        <form
          className="border border-[#cccccc9c] rounded-lg px-3 md:px-6 py-3 space-y-4"
          onSubmit={handleAUpdateRecipe}
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Side */}
            <div className="w-full md:w-1/2 space-y-2">
              <legend className="fieldset-legend">Title</legend>
              <input
                type="text"
                required
                name="title"
                defaultValue={title}
                className="input input-bordered w-full"
                placeholder="Title..."
              />

              <legend className="fieldset-legend">Cuisine type</legend>
              <select
                name="cuisine"
                defaultValue={cuisine}
                className="select select-bordered w-full"
              >
                <option disabled={true}>Cuisine type</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Chinese">Chinese</option>
                <option value="Bangladesh">Bangladesh</option>
              </select>

              <legend className="fieldset-legend">Categories</legend>
              <fieldset className="space-x-2 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <label key={category} className="cursor-pointer text-sm">
                    <input
                      className="checkbox mr-1 checkbox-primary checkbox-xs"
                      type="checkbox"
                      value={category}
                      defaultChecked={selectedCategories.includes(category)}
                      onChange={handleCheckboxChange}
                    />
                    {category}
                  </label>
                ))}
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </fieldset>

              <legend className="fieldset-legend">Instructions</legend>
              <textarea
                required
                name="instructions"
                className="textarea textarea-bordered h-24 w-full resize-none"
                placeholder="Instructions...."
                defaultValue={instructions}
              ></textarea>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 space-y-2">
              <legend className="fieldset-legend">Image</legend>
              <input
                type="url"
                name="image"
                required
                placeholder="https://"
                defaultValue={image}
                className="input input-bordered w-full"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                title="Must be valid URL"
              />

              <legend className="fieldset-legend">Preparation time</legend>
              <input
                type="number"
                required
                name="preparationtime"
                defaultValue={preparationTime}
                className="input input-bordered w-full"
                placeholder="Preparation time..."
              />

              <legend className="fieldset-legend">Like</legend>
              <input
                type="text"
                value={like}
                name="like"
                className="input input-bordered w-full"
                readOnly
              />

              <legend className="fieldset-legend">Ingredients</legend>
              <textarea
                required
                name="ingredients"
                className="textarea textarea-bordered h-24 w-full resize-none"
                placeholder="Ingredients"
                defaultValue={ingredients}
              ></textarea>
            </div>
          </div>

          <button className="btn btn-block mt-4 btn-warning">
            Update Recipe
          </button>
        </form>
        <button
          onClick={() => setIsModalOpen(false)}
          className="cursor-pointer bg-warning  btn  absolute top-13 left-10"
        >
          <FaArrowLeft size={20} />
        </button>
      </div>
    </Modal>
  );
};

export default Dialog;
