import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const user = Cookies.get("user");


  if (user && (location.pathname === "/login" || location.pathname === "/register")) {
    return <div className="d-none">{children}</div>;
  }

  if (!user && location.pathname !== "/login" && location.pathname !== "/register") {
    return <div className="d-none">{children}</div>;
  }


  return <div>{children}</div>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;