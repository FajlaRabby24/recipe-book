import React from "react";
import { use } from "react";
import { AuthContext } from "../store/contexts";
import { useEffect } from "react";
import { useState } from "react";
import SingleRecipe from "../components/SingleRecipe";
import RecipeDetails from "./RecipeDetails";
import MyRecipeDetails from "../components/MyRecipeDetails";

const MyRecipe = () => {
  const { user } = use(AuthContext);
  const [myRecipes, setMYRecipes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/my-recipe?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMYRecipes(data);
      });
  }, [user]);

  return (
    <div className="pt-16 pb-48">
      <h1 className="text-2xl font-semibold mb-8">My Recipe</h1>
      <div className="grid grid-cols-1 gap-4">
        {myRecipes.map((recipe) => (
          <MyRecipeDetails key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default MyRecipe;
