import React, { useEffect } from "react";
import "../sass/main.scss";
import logo from "../assets/images/logo512.png";
import userImg from "../assets/images/user-img.png";
import { routeLinks } from "../assets/links/links";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { getUser } from "../feautures/user/userSlice";
import { getUserFromLocalStorage } from "../utils/localStorage";

export const Sidebar = () => {
  const { pathname } = useLocation();
  const user = getUserFromLocalStorage();

  return (
    <aside>
      <div className="sidebar-container">
        <div className="flex">
          <img src={logo} alt="logo" />
          <h2>My Storage</h2>
        </div>
        <div className="user-profile">
          <img src={userImg} alt="logo" />
          <h4>{user.username}</h4>
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
