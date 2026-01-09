

const Recipe = ({recipe, handleWantToCook}) => {
    
    return (
        <div className="card bg-base-100 shadow-xl rounded-2xl  outline-1 p-4">
            <figure className="w-full h-48 overflow-hidden rounded-2xl">
                <img
                 src={recipe.recipe_image} 
                 alt={recipe.recipe_name} 
                 className="w-full h-full object-cover"
                 />
            </figure>

            <div className="card-body ">
                <h2 className="card-title font-bold ">{recipe.recipe_name}</h2>
                <p className="mb-3">{recipe.short_description}</p>
                <hr />
                <h4 className="font-bold mt-3 ">Ingredients:</h4>
                <ul className="list-disc ml-4 ">
                    {recipe.ingredients.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className=" text-sm mt-3">
                    <hr />
                    <span> 🕒{recipe.preparing_time}</span>
                    <span> 🔥{recipe.calories}</span>
                    
                </div>
                <div>
                    <button 
                    onClick={ () => handleWantToCook(recipe)}
                    className="px-6 py-3 mt-6 mb-6 bg-green-500 font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-green-600 hover:shadow-xl hover:translate-y-1 active:scale-95">want to cook</button>
                </div>

            </div>
          
        </div>
    );
};

export default Recipe;