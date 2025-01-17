import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contextAip/ContextCreate";

const PrivateAddReviewsRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateAddReviewsRoute;
