import { Header } from './Header/Header';
import { UserForm } from './UserForm/UserForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import LoginPage from './pages/LoginPage';
import { getRefreshUser } from 'redux/contacts/contactsThunk';
import s from './App.module.css';
import {CgHello} from  'react-icons/cg'


export const App = ()=>{
  const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRefreshUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            isAuth ? (
              <UserForm />
            ) : (
              <p className={s.welcome}>
                Wellcome <CgHello size="1.5rem" color="orange"/>
              </p>
            )
          }
        />
      </Routes>
    </>
  );
}
