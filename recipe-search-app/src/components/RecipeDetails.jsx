export default function RecipeDetails({ recipe, onClose }) {
    if (!recipe) return null;
  
    return (
      <div className="mt-6 p-4 border rounded">
        <button onClick={onClose} className="mb-2 text-red-500">Close</button>
        <h2 className="text-2xl font-bold">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-600">{recipe.strCategory} - {recipe.strArea}</p>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-60 object-cover rounded mt-2"
        />
        <h3 className="text-lg font-bold mt-4">Ingredients:</h3>
        <ul className="list-disc pl-6">
          {Array.from({ length: 20 }, (_, i) => i + 1)
            .map((i) => recipe[`strIngredient${i}`] && `${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`)
            .filter(Boolean)
            .map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
        </ul>
        <h3 className="text-lg font-bold mt-4">Instructions:</h3>
        <p className="mt-2 whitespace-pre-line">{recipe.strInstructions}</p>
        {recipe.strYoutube && (
          <div className="mt-4">
            <h3 className="text-lg font-bold">Video Tutorial:</h3>
            <iframe
              className="w-full h-60 mt-2"
              src={recipe.strYoutube.replace("watch?v=", "embed/")}
              allowFullScreen
            ></iframe>
          </div>
        )}
        {recipe.strSource && (
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-blue-500 hover:underline"
          >
            View Full Recipe
          </a>
        )}
      </div>
    );
  }
  