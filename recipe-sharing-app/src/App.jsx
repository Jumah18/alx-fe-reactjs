import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/REcipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <Router>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Recipe Manager</h1>
        <nav className="mb-4">
          <Link to="/" className="mr-4 text-blue-500">Home</Link>
          <Link to="/favorites" className="mr-4 text-blue-500">Favorites</Link>
          <Link to="/recommendations" className="text-blue-500">Recommendations</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                {/* <RecipeList /> */}
              </>
            }
          />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
