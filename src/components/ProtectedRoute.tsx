import { Navigate } from "react-router-dom";
import { useAuthUser } from "../hooks/useAuth";

const ProtectedRoute = ({ component: Component, roles }: { component: React.FC; roles: string[] }) => {
  const { isSignedIn, user } = useAuthUser();

  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }

  if (!roles.includes(user?.publicMetadata?.role)) {
    return <Navigate to="/" />;
  }

  return <Component />;
};

export default ProtectedRoute;
