import { useState } from "react";
import { useLoaderData } from "react-router";
import NoRecipe from "../components/NoRecipe";
import SingleRecipe from "../components/SingleRecipe";
import useScrollToTop from "../hooks/useScrollToTop";
import useTitle from "../hooks/useTitle";

const AllRecipe = () => {
  const initialAllRecipe = useLoaderData();
  const [allRecipe, setAllRecipe] = useState(initialAllRecipe);
  const [noRecipe, setNoRecipe] = useState(false);

  useTitle("All recipe");
  useScrollToTop();

  const handleFilterCuisine = (e) => {
    const selected = e.target.value.toLowerCase();
    let setRecipe;

    if (selected === "all") {
      setRecipe = initialAllRecipe;
    } else {
      setRecipe = initialAllRecipe.filter(
        (recipe) => recipe.cuisine.toLowerCase() === selected
      );
    }

    setAllRecipe(setRecipe);
    setNoRecipe(setRecipe.length === 0);
  };

  return (
    <div className="pt-12 px-3 pb-52">
      <div className="mb-6 flex items-center justify-between gap-8">
        <h1 className="text-2xl md:text-3xl font-semibold ">All Recipe</h1>
        <div className="flex items-center gap-2">
          <h4 className="text-g md:text-xl font-semibold">Filter:</h4>
          <select
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Filter by cuisine"
            name="cuisine"
            defaultValue="Filter"
            className="select font-semibold w-fit"
            onChange={handleFilterCuisine}
          >
            <option value={"all"}>All</option>
            <option value={"italian"}>Italian</option>
            <option value={"mexican"}>Mexican</option>
            <option value={"chinese"}>Chinese</option>
            <option value={"bangladesh"}>Bangladesh</option>
          </select>
        </div>
      </div>
      {noRecipe && (
        <NoRecipe>
          <h1 className="text-2xl font-semibold text-center mb-1">
            No Recipe Found!
          </h1>
          <p className="font-semibold">Please choose another Cuisine!</p>
        </NoRecipe>
      )}
      {!noRecipe && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allRecipe.map((recipe) => (
            <SingleRecipe key={recipe._id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRecipe;
