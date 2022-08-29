import React from "react";
import "./Sidebar.css";
import logo from "../../assets/images/logo512.png";
import user from "../../assets/images/user-img.png";
import { routeLinks } from "../../assets/links/links";
import { NavLink, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside>
      <div className="sidebar-container">
        <div className="flex">
          <img src={logo} alt="logo" />
          <h2>My Storage</h2>
        </div>
        <div className="user-profile">
          <img src={user} alt="logo" />
          <h4>Jennifer Rass</h4>
        </div>
        <div className="route-options">
          {routeLinks.map((item) => {
            return (
              <div className="link-container" key={item.id}>
                <span
                  className={item.path === pathname ? "link active" : "link"}
                >
                  {item.icon}
                </span>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
