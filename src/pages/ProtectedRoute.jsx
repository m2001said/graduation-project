
import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
   const authState = useSelector(state => state.auth);
      let location = useLocation();

    if (authState.status !== "succeeded" ) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
};

export default ProtectedRoute;
