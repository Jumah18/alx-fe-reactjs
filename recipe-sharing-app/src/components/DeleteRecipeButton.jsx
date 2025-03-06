import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button
      onClick={() => deleteRecipe(recipeId)}
      className="bg-red-500 text-white p-2 mt-2"
    >
      Delete Recipe
    </button>
  );
};

// ["useNavigate"]

export default DeleteRecipeButton;
