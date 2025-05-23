import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("authToken");
  if (!token) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return children;
}

export default ProtectedRoute;
