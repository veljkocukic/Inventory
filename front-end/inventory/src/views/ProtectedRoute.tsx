import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: any) => {
  const { userToken } = useSelector((store: any) => store.user);

  if (!userToken) {
    return <Navigate to="login" />;
  }
  return children;
};
