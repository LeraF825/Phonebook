import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOutAction } from 'redux/auth/authSlice';
import clsx from 'clsx';
import s from './Header.module.css';
import { FcTwoSmartphones } from 'react-icons/fc';
import {HiHome} from  'react-icons/hi'

export const Header = () => {
    const { isAuth } = useSelector(state => state.auth);
    const { userName } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (isAuth) {
        navigate('/');
      }
    }, [isAuth, navigate]);

    return (
      <div className={s.header}>
        <div className={s.home}>
          <NavLink
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
            to="/"
          >
            Home <HiHome />
          </NavLink>
        </div>
        <h2 className={s.title}>Phone
        <span className={s.partTitle}>book</span>
        <FcTwoSmartphones />
        </h2>
        {isAuth ? (
          <div className={s.Logout}>
            <h3 className={s.title}>Hello, {userName} !</h3>
            <button
              className={s.logoutBtn}
              onClick={() => {
                dispatch(logOutAction());
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className={s.autho}>
            <NavLink
              className={({ isActive }) => clsx(s.link, isActive && s.active)}
              to="/register"
            >
              <span className={s.registr}>Registration</span>
            </NavLink>
            <NavLink
              className={({ isActive }) => clsx(s.link, isActive && s.active)}
              to="/login"
            >
              <span className={s.login}>Log In</span>
            </NavLink>
          </div>
        )}
      </div>
    );
  };