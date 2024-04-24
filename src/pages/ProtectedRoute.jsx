
import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
   const authState = useSelector(state => state.auth);
   const isSignedIn = authState.user && authState.user.token && authState.user.token !== ''; 
      let location = useLocation();

    if (!isSignedIn) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
};

export default ProtectedRoute;
