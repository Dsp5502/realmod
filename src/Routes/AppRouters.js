import { onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Components/Login/Login';
import Register from '../Components/Resgiter/Register';
import { auth } from '../Firebase/fireBaseConfing';
import DashRoutersRoute from './DashRoutersRoute';
import PrivateRouters from './PrivateRouters';
import PublicRouters from './PublicRouters';

function AppRouters() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);
  console.log(isLoggedIn);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [setIsLoggedIn, setChecking]);
  if (checking) {
    return <div>Checking...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <PublicRouters isLoggedIn={isLoggedIn}>
              <Login />
            </PublicRouters>
          }
        />
        <Route
          path='/registrarse'
          element={
            <PublicRouters isLoggedIn={isLoggedIn}>
              <Register />
            </PublicRouters>
          }
        />

        <Route
          path='/*'
          element={
            <PrivateRouters isLoggedIn={isLoggedIn}>
              <DashRoutersRoute />
            </PrivateRouters>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
