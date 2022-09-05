import React from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Settings = () => {
  const { pathname } = useLocation();

  return (
    <div style={{ height: "100vh" }}>
      <h2>{pathname}</h2>
      <Outlet />
    </div>
  );
};
