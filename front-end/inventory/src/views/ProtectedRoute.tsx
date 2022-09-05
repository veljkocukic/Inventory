import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import getCookies from "../utils/cookies/getCookies";

export const ProtectedRoute = ({ children }: any) => {
  const token = getCookies("usrin");

  console.log(token);

  if (!token) {
    return <Navigate to="login" />;
  }
  return children;
};
