import React from 'react';
import FormLogin from './FormLogin';

const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center  p-5 bg-caribbean-green-50 bg-opacity-30 '>
      <div className=' w-10/12 flex justify-center items-center shadow1 bg-white p-5 rounded-3xl'>
        <section className='w-2/4 px-2 pt-15 flex flex-col justify-center items-center '>
          <img
            className='w-full'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1652816233/Logo_j4fvgp.png'
            alt=''
          />
          <img
            className='w-full h-auto mt-10'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1652811815/Image_ld2v3i.png'
            alt=''
          />
        </section>
        <section className='w-2/4 '>
          <FormLogin />
        </section>
      </div>
    </div>
  );
};

export default Login;
