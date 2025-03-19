// import { useState, useEffect } from "react";

// const HomePage = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     // Load data from data.json
//     fetch("/data.json")
//       .then((response) => response.json())
//       .then((data) => setRecipes(data))
//       .catch((error) => console.error("Error loading recipes:", error));
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Recipe Collection</h1>
//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {recipes.map((recipe) => (
//           <div
//             key={recipe.id}
//             className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105 hover:shadow-lg"
//           >
//             <img
//               src={recipe.image}
//               alt={recipe.title}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
//             <p className="text-gray-600 mt-2">{recipe.summary}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import { useState, useEffect } from "react";

// const HomePage = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     // Load data from data.json
//     fetch("/data.json")
//       .then((response) => response.json())
//       .then((data) => setRecipes(data))
//       .catch((error) => console.error("Error loading recipes:", error));
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Recipe Collection</h1>
//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {recipes.map((recipe) => (
//           <div
//             key={recipe.id}
//             className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105 hover:shadow-lg"
//           >
//             <img
//               src={recipe.image}
//               alt={recipe.title}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
//             <p className="text-gray-600 mt-2">{recipe.summary}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import { useState, useEffect } from "react";
import recipesData from "../data.json"; // Import JSON directly

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData); // Set the imported data
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Collection</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
