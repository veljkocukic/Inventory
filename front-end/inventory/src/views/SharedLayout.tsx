import React from "react";
import "../sass/main.scss";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const SharedLayout = () => {
  return (
    <div className="layout-wrapper">
      <Sidebar />
      <div className="dashboard-container">
        <Outlet />
      </div>
    </div>
  );
};
