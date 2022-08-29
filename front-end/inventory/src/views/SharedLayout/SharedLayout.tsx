import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./layout.css";

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
