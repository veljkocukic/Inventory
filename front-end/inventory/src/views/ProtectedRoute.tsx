import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import getCookies from '../utils/cookies/getCookies';

export const ProtectedRoute = ({ children }: any) => {
  const user = getCookies('usrin');
  let forReturn = children;

  useEffect(() => {
    if (!user) {
      forReturn = <Navigate to='login' />;
    }
  }, [user]);

  return forReturn;
};
