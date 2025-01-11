import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const user = Cookies.get("user");

 
  if (location.pathname === "/login" || location.pathname === "/register") {
    
    if (user) {
      return <Navigate to="/" />; 
    }
    return children; 
  }

  if (user) {
    return children;
  }


  return <Navigate to="/register" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
