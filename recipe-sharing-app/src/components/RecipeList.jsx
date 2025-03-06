
import useRecipeStore from "./recipeStore";

const RecipeList = () => {

  
  const recipes = useRecipeStore((state) => state.getFilteredRecipes(state));
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No matching recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="border p-2 mb-2">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button
              onClick={() =>
                favorites.includes(recipe.id) ? removeFavorite(recipe.id) : addFavorite(recipe.id)
              }
              className={`px-2 py-1 rounded ${
                favorites.includes(recipe.id) ? "bg-red-500 text-white" : "bg-gray-300"
              }`}
            >
              {favorites.includes(recipe.id) ? "Unfavorite" : "Add to Favorites"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
