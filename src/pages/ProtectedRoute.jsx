import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(false);

  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
