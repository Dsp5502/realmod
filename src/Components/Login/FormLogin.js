import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginGoogle } from '../../Redux/Actions/actionLogin';
import FormCorreo from './FormCorreo';

const FormLogin = () => {
  const dispatch = useDispatch();
  const handleGoogle = () => {
    dispatch(loginGoogle());
  };

  return (
    <div>
      <h1 className='text-4xl text-center mt-5 font-bold'>Incia Sesión</h1>
      <h2 className='text-xl text-center font-light mt-3 '>
        Inicia Sesión con tu Cuenta
      </h2>
      <div className='flex justify-center gap-10 my-5 '>
        <FontAwesomeIcon
          icon={faGoogle}
          onClick={() => {
            handleGoogle();
          }}
          className='border-2 p-2 text-red-500  text-2xl hover:border-red-500 hover:text-red-700 rounded-sm'
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className='border-2 p-2 text-blue-500 text-2xl hover:border-blue-500 hover:text-blue-700 rounded-sm'
        />
      </div>

      <hr />

      <FormCorreo />
    </div>
  );
};

export default FormLogin;
