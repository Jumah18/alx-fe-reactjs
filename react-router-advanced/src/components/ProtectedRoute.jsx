import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = false; // Change this to true to simulate login

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
