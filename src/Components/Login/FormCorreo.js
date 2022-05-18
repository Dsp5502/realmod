import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { loginAsync } from '../../Redux/Actions/actionLogin';
import { useDispatch } from 'react-redux';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('correo@correo.com')
    .min(5, 'El correo debe tener al menos 5 caracteres')
    .max(50, 'El correo debe tener menos de 50 caracteres')
    .required('El correo es requerido'),
  password: Yup.string(),
});

const FormCorreo = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password }) => {
    dispatch(loginAsync(email, password));
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className='w-full px-2 py-5  '>
          <Field
            name='email'
            placeholder=' Ingresa Tu Correo'
            type='email'
            className='border-2 w-full rounded-md  p-2 outline-none hover:ring-2 hover:ring-caribbean-green-500 '
          />
          {errors.email && touched.email ? (
            <div className='px-2 text-red-500'>{errors.email}</div>
          ) : null}
          <Field
            name='password'
            placeholder=' Ingresa Tu Contraseña'
            type='password'
            className='border-2 w-full rounded-md  p-2 outline-none mt-3 hover:ring-2 hover:ring-caribbean-green-500'
          />
          {errors.password && touched.password ? (
            <div className='px-2 text-red-500'>{errors.password}</div>
          ) : null}
          <button
            type='submit'
            // className='text-white bg-caribbean-green rounded-3xl px-10 py-4 w-full mt-5 mb-2'
            className='btnLogin'
          >
            Iniciar Sesión
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormCorreo;
