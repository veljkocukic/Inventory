import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, user }: any) => {
  if (!user) {
    return <Navigate to="login" />;
  }
  return children;
};
