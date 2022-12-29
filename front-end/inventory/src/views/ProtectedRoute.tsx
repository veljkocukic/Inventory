import React from 'react';
import { Navigate } from 'react-router-dom';
import getCookies from '../utils/cookies/getCookies';

export const ProtectedRoute = ({ children }: any) => {
  const token = getCookies('usrin');

  if (!token) {
    return <Navigate to='login' />;
  }
  return children;
};
