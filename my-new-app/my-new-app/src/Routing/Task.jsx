import React, { useState } from "react";

const Task = () => {
  const [recipes, setRecipes] = useState([]);

  const dish = [
    { id: 1, name: "Pizza", price: 300 },
    { id: 2, name: "Noodles", price: 250 },
    { id: 3, name: "FriedRice", price: 200 },
    { id: 4, name: "Dal", price: 300 }
  ];

  const fetchRecipeDetails = (id) => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(response => response.json())
      .then(data => {
        setRecipes(prev => [...prev, data]);
      })
      .catch(error => {
        console.log("Error fetching recipe:", error);
      });
  };

  return (
    <div>
      <h2>Dish List</h2>

      {dish.map((item) => (
        <div key={item.id} style={{ marginBottom: "15px" }}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <button onClick={() => fetchRecipeDetails(item.id)}>
            View Details
          </button>
        </div>
      ))}

      <hr />

      <h2>Recipe Details</h2>

      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "20px" }}>
          <h4>{recipe.title}</h4>
          <p>Cuisine: {recipe.cuisine}</p>
          <p>Ingredients: {recipe.ingredients.join(", ")}</p>
          <p>Instructions: {recipe.instructions.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Task;