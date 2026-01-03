import React from "react";


const CookingSidebar = () => {
  return (
    <div className="card bg-base-100 shadow-xl p-6 sticky top-4 rounded-3xl mt-40 outline-1">
      <h3 className="font-bold text-lg mb-4">Want to cook:</h3>
      <hr />

      <div className="text-sm">
        <div className="flex justify-between font-semibold mb-2">
          <span>Name</span>
          <span>Time</span>
          <span>Calories</span>
        </div>

        
      </div>

      <hr className="my-4" />

      <h3 className="font-bold text-lg">Currently cooking:</h3>
      <p className="text-sm mt-2">Total Time: </p>
      <p className="text-sm">Total Calories: </p>
    </div>
  );
};

const RecipeCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 rounded-3xl">
      
      <div className="flex-1">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold">Our Recipes</h1>
          <p className="mt-4 text-gray-600">
            Explore a variety of delicious recipes curated just for you! A world
            full of taste is a fingertip away now! Visit our restaurant or order
            online whenever you want.
            <br />
            To order online please visit our website now
          </p>
        </div>

        <div className="flex flex-col gap-6 px-4 ">
          
          <div className="flex flex-col md:flex-row gap-4 ">
            
            <div className="card bg-base-100 shadow-xl flex-1 px-4 py-4 outline-1 rounded-3xl">
              <figure>
                <img
                  className="rounded-3xl w-full h-64 object-cover"
                  src="https://images.unsplash.com/photo-1598866594230-a7c12756260f"
                  alt="Spaghetti Bolognese"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Spaghetti Bolognese</h2>
                <p className="text-sm text-gray-500">
                  Classic Italian pasta dish with savory meat sauce.
                </p>
                <hr />
                <h4 className="font-semibold text-left">Ingredients: 6</h4>
                <ul className="text-sm text-gray-500 list-disc ml-4 text-left">
                  <li>500g ground beef</li>
                  <li>1 onion, chopped</li>
                  <li>2 cloves garlic</li>
                </ul>
                <div className=" text-sm mt-4">
                  <span>🕒 30 minutes</span>
                  <span>🔥 600 calories</span>
                </div>
                <button className="btn btn-success rounded-3xl bg-green-400 font-bold p-3 mt-2">
                  want to cook
                </button>
              </div>
            </div>

            {/* Chicken Caesar Salad */}
            <div className="card bg-base-100 shadow-xl flex-1 px-4 py-4 outline-1 rounded-3xl ">
              <figure>
                <img
                  className="rounded-3xl w-full h-64 object-cover"
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
                  alt="Chicken Caesar Salad"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Chicken Caesar Salad</h2>
                <p className="text-sm text-gray-500">
                  Classic Italian pasta dish with savory meat sauce.
                </p>
                <hr />
                <h4 className="font-semibold text-left">Ingredients: 6</h4>
                <ul className="text-sm text-gray-500 list-disc ml-4 text-left">
                  <li>500g ground beef</li>
                  <li>1 onion, chopped</li>
                  <li>2 cloves garlic</li>
                </ul>
                <div className=" text-sm mt-4">
                  <span>🕒 30 minutes</span>
                  <span>🔥 600 calories</span>
                </div>
                <button className="btn btn-success rounded-3xl bg-green-400 font-bold p-3 mt-2">
                  want to cook
                </button>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Croque Monsieur */}
            <div className="card bg-base-100 shadow-xl flex-1 px-4 py-4 outline-1 rounded-3xl">
              <figure>
                <img
                  className="rounded-3xl w-full h-64 object-cover"
                  src="https://images.unsplash.com/photo-1544025162-d76694265947"
                  alt="Croque Monsieur"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Croque Monsieur</h2>
                <p className="text-sm text-gray-500">
                  A classic French grilled sandwich made with ham, cheese and
                  sauce.
                </p>
                <hr />
                <h4 className="font-semibold text-left">Ingredients: 6</h4>
                <ul className="text-sm text-gray-500 list-disc ml-4 text-left">
                  <li>500g ground beef</li>
                  <li>1 onion, chopped</li>
                  <li>2 cloves garlic</li>
                </ul>
                <div className=" text-sm mt-4">
                  <span>🕒 30 minutes</span>
                  <span>🔥 600 calories</span>
                </div>
                <button className="btn btn-success rounded-3xl bg-green-400 font-bold p-3 mt-2">
                  want to cook
                </button>
              </div>
            </div>

            {/* Crêpes */}
            <div className="card bg-base-100 shadow-xl flex-1 px-4 py-4 outline-1 rounded-3xl">
              <figure>
                <img
                  className="rounded-3xl w-full h-64 object-cover"
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
                  alt="Crêpes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Crêpes (Savory & Sweet)</h2>
                <p className="text-sm text-gray-500">
                  Very popular street food.
                </p>
                <hr />
                <h4 className="font-semibold text-left">Ingredients: 6</h4>
                <ul className="text-sm text-gray-500 list-disc ml-4 text-left">
                  <li>500g ground beef</li>
                  <li>1 onion, chopped</li>
                  <li>2 cloves garlic</li>
                </ul>
                <div className=" text-sm mt-4">
                  <span>🕒 30 minutes</span>
                  <span>🔥 600 calories</span>
                </div>
                <button className="btn btn-success rounded-3xl bg-green-400 font-bold p-3 mt-2">
                  want to cook
                </button>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Jambon-Beurre */}
            <div className="card bg-base-100 shadow-xl flex-1 px-4 py-4 outline-1 rounded-3xl">
              <figure>
                <img
                  className="rounded-3xl w-full h-64 object-cover"
                  src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56"
                  alt="Jambon-Beurre"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Jambon-Beurre</h2>
                <p className="text-sm text-gray-500">
                  A simple and iconic French sandwich made with fresh baguette,
                  butter.
                </p>
                <hr />
                <h4 className="font-semibold text-left">Ingredients: 6</h4>
                <ul className="text-sm text-gray-500 list-disc ml-4 text-left">
                  <li>500g ground beef</li>
                  <li>1 onion, chopped</li>
                  <li>2 cloves garlic</li>
                </ul>
                <div className=" text-sm mt-4">
                  <span>🕒 30 minutes</span>
                  <span>🔥 600 calories</span>
                </div>
                <button className="btn btn-success rounded-3xl bg-green-400 font-bold p-3 mt-2">
                  want to cook
                </button>
              </div>
            </div>

            {/* French Fries */}
            <div className="card bg-base-100 shadow-xl flex-1 px-4 py-4 outline-1 rounded-3xl">
              <figure>
                <img
                  className="rounded-3xl w-full h-64 object-cover"
                  src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5"
                  alt="French Fries"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">French Fries (Frites)</h2>
                <p className="text-sm text-gray-500">
                  Golden, crispy deep-fried potatoes, commonly served in cones or
                  boxes.
                </p>
                <hr />
                <h4 className="font-semibold text-left">Ingredients: 6</h4>
                <ul className="text-sm text-gray-500 list-disc ml-4 text-left">
                  <li>500g ground beef</li>
                  <li>1 onion, chopped</li>
                  <li>2 cloves garlic</li>
                </ul>
                <div className=" text-sm mt-4">
                  <span>🕒 30 minutes</span>
                  <span>🔥 600 calories</span>
                </div>
                <button className="btn btn-success rounded-3xl bg-green-400 font-bold p-3 mt-2">
                  want to cook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-80 mt-6 lg:mt-0">
        <CookingSidebar />
      </div>
    </div>
  );
};

export default RecipeCard;
