import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const RecipeCard = () => {

  const [recipeCard, setRecipeCard] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);

  const handleWantToCook = (recipe) => {
  const alreadyAdded = wantToCook.find(
    item => item.recipe_id === recipe.recipe_id
  );

  if (!alreadyAdded) {
    setWantToCook([...wantToCook, recipe]);
  }
};

  useEffect(() => {
    fetch('/recipe.json')
      .then(res => res.json())
      .then(data => setRecipeCard(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center">
        Recipes : {recipeCard.length}
      </h1>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 ">

        {/* Recipe Cards → 2/3 width */}
        <div className="md:col-span-2 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
            {
              recipeCard.map(recipe => (
                <Recipe
                  key={recipe.recipe_id}
                  recipe={recipe}
                  handleWantToCook = {handleWantToCook}
                />
              ))
            }
          </div>
        </div>

        {/* Sidebar → 1/3 width (placeholder) */}
        <div className="md:col-span-1 ">
          <div className="card bg-base-100 shadow-xl p-6 rounded-3xl outline-1 sticky top-20">
            <h3 className="font-bold">Want to cook</h3>
            <hr />
            {
    wantToCook.map((item, index) => (
      <div
        key={item.recipe_id}
        className="flex justify-between text-sm mt-3"
      >
        <span>{index + 1}. {item.recipe_name}</span>
        <span>{item.preparing_time}</span>
        <span>{item.calories}</span>
      </div>
    ))
  }
                
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecipeCard;
