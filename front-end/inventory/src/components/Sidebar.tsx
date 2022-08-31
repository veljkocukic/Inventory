import React from "react";
import "../sass/main.scss";
import logo from "../assets/images/logo512.png";
import userImg from "../assets/images/user-img.png";
import { routeLinks } from "../assets/links/links";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const { pathname } = useLocation();
  // const { user } = useSelector((store: any) => store.user);

  return (
    <aside>
      <div className="sidebar-container">
        <div className="flex">
          <img src={logo} alt="logo" />
          <h2>My Storage</h2>
        </div>
        <div className="user-profile">
          <img src={userImg} alt="logo" />
          <h4>{"Jennifer Rass"}</h4>
        </div>
        <div className="route-options">
          {routeLinks.map((item) => {
            return (
              <div className="link-container" key={item.id}>
                <div
                  className={item.path === pathname ? "link active" : "link"}
                >
                  {item.icon}
                </div>
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
