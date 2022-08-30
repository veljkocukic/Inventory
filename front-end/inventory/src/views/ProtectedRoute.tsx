import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: any) => {
  const { user } = useSelector((store: any) => store.user);

  if (!user) {
    return <Navigate to="login" />;
  }
  return children;
};
