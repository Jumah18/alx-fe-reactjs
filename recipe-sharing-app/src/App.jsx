import './App.css'
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recipe Manager</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;

