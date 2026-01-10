import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import toast from 'react-hot-toast';


const RecipeCard = () => {

  const [recipeCard, setRecipeCard] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const handlePreparing = (recipe) => {
  const alreadyCooking = currentlyCooking.find(
    item => item.recipe_id === recipe.recipe_id
  );

  if (alreadyCooking) {
    toast.warning("Already cooking this recipe!");
    return;
  }
  setCurrentlyCooking(prev => [...prev, recipe]);
  setWantToCook(prev =>
    prev.filter(item => item.recipe_id !== recipe.recipe_id)
  );

  toast.success("Moved to Currently Cooking 🍳");
  

  
  setWantToCook(prev=>
    prev.filter(item => item.recipe_id !== recipe.recipe_id)
  )
}

  const handleWantToCook = (recipe) => {
  const alreadyAdded = wantToCook.find(
    item => item.recipe_id === recipe.recipe_id
  );

  if (alreadyAdded) {
    toast.error("Recipe already added!");
    return;
  }

  setWantToCook(prev => [...prev, recipe]);
  toast.success("Added to Want to Cook 🍽️");
};

const totalTime = currentlyCooking.reduce(
  (sum, item) => sum + parseInt(item.preparing_time),
  0
);

const totalCalories = currentlyCooking.reduce(
  (sum, item) => sum + parseInt(item.calories),
  0
);


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
            <h3 className="font-bold">Want to cook: {wantToCook.length}</h3>
            <hr />
            <div className='flex justify-between'>
                <p>Name </p>
                <p>Time</p>
                <p className='px-6'>Calories</p>
            </div>
            {
    wantToCook.map((item, index) => (
      <div
        key={item.recipe_id}
        className="flex justify-between text-sm mt-3 items-center"
      >
        <span>{index + 1}. {item.recipe_name}</span>
        <span>{item.preparing_time}</span>
        <span>{item.calories}</span>
        <button 
        onClick={() =>handlePreparing(item)}
        className='bg-green-400 rounded-4xl px-3 py-2 font-semibold '>Preparing</button>
      </div>

      
    ))
  }
  <h3 className='font-bold mt-6 mb-2'>
    currentlyCooking: {currentlyCooking.length}
  </h3>
  <hr />

  <div className='text-sm mt-3 space-y-2'></div>
  {
    currentlyCooking.map((item, index) => (
        <div
          key={item.recipe_id}
          className="flex justify-between"
        >
            <span>{index + 1}. {item.recipe_name}</span>
          <span>{item.preparing_time}</span>
          <span>{item.calories}</span>
        </div>
    ))
  }
  <p className="mt-2 font-semibold">
  Total Time: {totalTime} min
</p>
<p className="font-semibold">
  Total Calories: {totalCalories} calories
</p>

                
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecipeCard;
