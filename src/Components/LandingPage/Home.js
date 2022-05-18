import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutAsync } from '../../Redux/Actions/actionLogin';

const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAsync());
  };
  return (
    <div>
      Home
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
};

export default Home;
