import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const user = Cookies.get("user");

  const currentPath = window.location.hash.replace("#", "");

  if (user && (currentPath === "/login" || currentPath === "/register")) {
    return <Navigate to="/" />;
  }

  if (!user && currentPath !== "/login" && currentPath !== "/register") {
    return <Navigate to="/register" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
