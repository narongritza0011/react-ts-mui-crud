// src/PrivateRoute.tsx

import React from 'react';
import { Route, RouteProps, Navigate } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  // Add any additional props you need
  isAuthenticated: boolean;
  redirectTo: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  redirectTo,
  element: Component,
  ...rest
}) => {
  return isAuthenticated ? (
    <Route {...rest} element={Component} />
  ) : (
    <Navigate to={redirectTo} replace={true} />
  );
};

export default PrivateRoute;
