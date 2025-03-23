import { useState } from "react";
import './App.css'
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";

export default function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState(null);
  const fetchRecipes = async () => {
    if (!query) return;
    setError(null);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
        setError("No recipes found. Try a different search.");
      }
    } catch (err) {
      setError("Failed to fetch recipes. Please try again later.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <SearchBar query={query} setQuery={setQuery} />
      <button className="mb-4 bg-blue-700 text-white-700 p-2 rounded" onClick={fetchRecipes}>
        Search
      </button>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} onSelect={setSelectedRecipe} />
        ))}
      </div>
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
    </div>

  );
}



// import './App.css'

// function App() {
//   return(
//     <>
//     <h1 className='text-green-800'>Hello</h1>
//     </>
//   )
// }

// export default App
