import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    alert("You should login");
    return <Navigate to="/login" replace />;
  }
  else {return children}
};

export default ProtectedRoute;