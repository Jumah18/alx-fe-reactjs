// import React, { useContext } from "react";
// import UserContext from "../context/UserContext"; // Import UserContext

// const UserDetails = () => {
//   const { user } = useContext(UserContext); // Use useContext to access user data

//   return (
//     <div>
//       <h2>User Details</h2>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

// export default UserDetails;



function UserDetails({ userData }) {
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;