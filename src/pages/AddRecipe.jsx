import React, { use, useState } from "react";
import { AuthContext } from "../store/contexts";
import { format } from "date-fns";
import { toast } from "react-toastify";
import useScrollToTop from "../hooks/useScrollToTop";

const AddRecipe = () => {
  const { user } = use(AuthContext);
  const [selectedCategories, setSeletedCategories] = useState([]);
  const [error, setError] = useState("");
  const categories = ["Breakfast", "lunch", "Dinner", "Vegan", "Desser"];

  useScrollToTop();

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSeletedCategories((prev) => [...prev, value]);
      setError("");
    } else {
      setSeletedCategories((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleAddRecipe = (e) => {
    e.preventDefault();

    setError("");
    if (!selectedCategories.length) {
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
    const creationTime = format(new Date(), "E, p, PP");
    const newRecipe = {
      selectedCategories,
      title,
      image,
      preparationTime,
      instructions,
      ingredients,
      like,
      cuisine,
      email,
      creationTime,
    };

    fetch("http://localhost:5000/add-recipe", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Recipe added successfully!");
          // form.reset();
        }
      });
  };

  return (
    <div className="pt-16 px-3 pb-40">
      <h1 className="text-2xl md:text-3xl font-bold md:font-semibold text-center">
        Add Recipe
      </h1>
      <p className="mt-2 mb-7  text-center max-w-4xl mx-auto">
        Easily add your own healthy recipes with step-by-step instructions,
        ingredients, and images. Customize meals, track nutrition, and build
        your personal collection of favorite dishes in one convenient place.
      </p>
      <form
        onSubmit={handleAddRecipe}
        className=" border border-[#cccccc9c] rounded-lg px-2 md:px-4 py-3 "
      >
        <div className="flex flex-col md:flex-row gap-5">
          <div className="bg-mber-100 md:w-1/2">
            {/* title  */}
            <legend className="fieldset-legend ">Title</legend>
            <input
              type="text"
              required
              name="title"
              className="input w-full"
              placeholder="Title..."
            />
            {/* Cuisine  type  */}
            <legend className="fieldset-legend ">Cuisine type</legend>
            <select
              name="cuisine"
              defaultValue="Cuisine type"
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
                    checked={selectedCategories.includes(category)}
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
              className="textarea h-20 w-full "
              placeholder="Instructions...."
            ></textarea>
          </div>
          <div className="bgamber-100 md:w-1/2">
            {/* image  */}
            <legend className="fieldset-legend">Image</legend>
            <input
              type="url"
              name="image"
              required
              placeholder="https://"
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
              className="input w-full"
              placeholder="Preparation time..."
            />

            {/* like  */}
            <legend className="fieldset-legend mt-2">Like</legend>
            <input
              type="text"
              value={0}
              name="like"
              className="input w-full"
              readOnly
            />

            {/* Ingredients  */}
            <legend className="fieldset-legend mt-2">Ingredients</legend>
            <textarea
              required
              name="ingredients"
              className="textarea h-20 w-full"
              placeholder="Ingredients"
            ></textarea>
          </div>
        </div>
        <button className="btn btn-block mt-5 btn-warning ">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
