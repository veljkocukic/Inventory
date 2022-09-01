import React, { FC, ReactElement, useState } from "react";
import { Navigate } from "react-router-dom";
import getCookies from "../utils/cookies/getCookies";

export const ProtectedRoute = ({ children }: any) => {
  const user = getCookies("usrin");

  if (!user) {
    return <Navigate to="login" />;
  }
  return children;
};
