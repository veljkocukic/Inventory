import React from "react";
import "./Sidebar.css";
import logo from "../../assets/images/logo512.png";
import logo2 from "../../assets/images/circle-img.jpeg";
import { routeLinks } from "../../assets/links/links";
import { NavLink, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside>
      <div className="sidebar-container">
        <div className="flex">
          <img src={logo2} alt="logo" />
          <h3>gig share</h3>
        </div>
        <div className="user-profile">
          <img src={logo} alt="logo" />
          <h4>Jennifer Rass</h4>
        </div>
        <div className="route-options">
          {routeLinks.map((item) => {
            return (
              <div className="link-container">
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
