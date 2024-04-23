import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ element, ...rest }) {
  const isSignedIn = useSelector(state => state.auth.user); 
  
  return (
    <Route {...rest} element={isSignedIn ? element : <Navigate to="/" />} />
  );
}

export default ProtectedRoute;