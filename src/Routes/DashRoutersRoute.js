import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Components/LandingPage/Home';

const DashRoutersRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Navigate to='home' />} />
      </Routes>
    </>
  );
};

export default DashRoutersRoute;
