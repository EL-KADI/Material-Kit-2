import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const user = Cookies.get("user");

  if (location.pathname === "/login" || location.pathname === "/register") {
    return children;
  }

  if (!user) {
    return <Navigate to="/register" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
