import React, { useEffect } from 'react';
import '../sass/main.scss';
import logo from '../assets/images/mystorage.png';
import userImg from '../assets/images/user-img.png';
import { routeLinks, settingsRoutes } from '../assets/links/links';
import { NavLink, useLocation } from 'react-router-dom';
import { getUserFromLocalStorage } from '../utils/localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { getUser } from '../feautures/user/userSlice';

export const Sidebar = () => {
  const { pathname } = useLocation();
  const localUser = getUserFromLocalStorage();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((store: any) => store.user);

  useEffect(() => {
    dispatch(getUser(localUser._id));
  }, []);

  return (
    <aside>
      <div className='sidebar-container'>
        {!pathname.includes('/settings') ? (
          <div className='route-options'>
            {routeLinks.map((item) => {
              return (
                <div className='link-container' key={item.id}>
                  <div
                    className={item.path === pathname ? 'link active' : 'link'}
                  >
                    {item.icon}
                  </div>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'link active' : 'link'
                    }
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                </div>
              );
            })}
          </div>
        ) : (
          <div className='route-options'>
            <h2>Settings</h2>
            {settingsRoutes.map((item) => {
              return (
                <div className='link-container' key={item.id}>
                  <div
                    className={item.path === pathname ? 'link active' : 'link'}
                  >
                    {item.icon}
                  </div>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'link active' : 'link'
                    }
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
};
