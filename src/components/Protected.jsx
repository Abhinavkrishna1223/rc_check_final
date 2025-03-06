import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const isAuthenticated = localStorage.getItem("login") === "true";

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default Protected;
