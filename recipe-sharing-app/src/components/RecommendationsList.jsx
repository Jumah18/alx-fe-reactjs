import useRecipeStore from "./recipeStore";
import { useEffect } from "react";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations(); // Generate recommendations when component mounts
  }, [generateRecommendations]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add favorites to get personalized suggestions!</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="border p-2 mb-2">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
