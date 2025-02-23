// import React from "react";
// import ProfilePage from "./components/ProfilePage";
// import { UserProvider } from "./context/UserContext"; // Import UserProvider

// const App = () => {
//   return (
//     <UserProvider>
//       <ProfilePage />
//     </UserProvider>
//   );
// };

// export default App;



import ProfilePage from './components/ProfilePage'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}

export default App;

// import { useState } from 'react'
// import './App.css'
// import { UserProvider } from './context/UserContext'
// import ProfilePage from './components/ProfilePage'
// function App() {

//   return (
//     <>
//       <div>
//       <UserProvider>
//        <ProfilePage/>
//        </UserProvider>
//       </div>
//     </>
//   )
// }

// export default App
