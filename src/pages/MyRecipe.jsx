import { use, useEffect, useState } from "react";
import { Link } from "react-router";
import MyRecipeDetails from "../components/MyRecipeDetails";
import NoRecipe from "../components/NoRecipe";
import useScrollToTop from "../hooks/useScrollToTop";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../store/contexts";

const MyRecipe = () => {
  useTitle("My recipe");
  useScrollToTop();

  const { user } = use(AuthContext);
  const [myRecipes, setMYRecipes] = useState([]);

  useEffect(() => {
    fetch(
      `https://recipe-book-server-mocha.vercel.app/my-recipe?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMYRecipes(data);
      });
  }, [user]);

  const handleDeleteRecipeInUI = (id) => {
    setMYRecipes((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <div className="pt-16 px-3 pb-48">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 lg:mb-8">
        My Recipe
      </h1>
      {!myRecipes.length && (
        <NoRecipe>
          <h1 className="text-2xl font-semibold text-center mb-1">
            You have no recipe!
          </h1>
          <p className="font-semibold">
            Please add a recipe from{" "}
            <Link to={"/add-recipe"} className="text-warning hover:underline">
              add-recipe
            </Link>{" "}
            page
          </p>
        </NoRecipe>
      )}
      <div className="grid grid-cols-1 gap-4">
        {myRecipes.map((recipe) => (
          <MyRecipeDetails
            key={recipe._id}
            recipe={recipe}
            handleDeleteRecipeInUI={handleDeleteRecipeInUI}
          />
        ))}
      </div>
    </div>
  );
};

export default MyRecipe;
