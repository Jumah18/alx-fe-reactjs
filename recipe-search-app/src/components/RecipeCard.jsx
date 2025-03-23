export default function RecipeCard({ recipe, onSelect }) {
    return (
      <div
        className="border rounded p-4 cursor-pointer hover:shadow-lg bg-black"
        onClick={() => onSelect(recipe)}
      >
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="text-lg font-bold mt-2">{recipe.strMeal}</h3>
        <p className="text-sm text-gray-600">{recipe.strCategory} - {recipe.strArea}</p>
      </div>
    );
  }
  