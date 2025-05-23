import { Link } from "react-router";
import SingleRecipe from "../components/SingleRecipe";

const TopRecipes = ({ topRecipes }) => {
  return (
    <div className="px-4">
      <h1 className="text-4xl font-semibold mb-6">Top Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topRecipes.map((recipe) => (
          <SingleRecipe key={recipe._id} recipe={recipe} />
        ))}
      </div>
      <div className="text-center py-10">
        <Link to={"/all-recipe"}>
          <button className="btn btn-warning btn-lg">All Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default TopRecipes;
