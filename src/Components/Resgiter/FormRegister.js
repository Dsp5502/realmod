import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerAsync } from '../../Redux/Actions/actionRegister';

const SignupSchema = Yup.object().shape({
  nombres: Yup.string()
    .min(2, 'Muy Corto')
    .max(20, 'Excede el maximo')
    .required('Este Campo Es obligatorio'),
  email: Yup.string()
    .email('correo@correo.com')
    .min(5, 'Muy Corto')
    .max(50, 'Excede el maximo')
    .required('Este Campo Es obligatorio'),
  password: Yup.string()
    .min(5, 'password deberia se de minimo 5 caracteres')
    .max(20)
    .required('El password es obligatorio')
    .oneOf([Yup.ref('confirmPassword')], 'Las contraseñas no coinciden'),
  confirmPassword: Yup.string()
    .min(5)
    .max(20)
    .required('El password es obligatorio')
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
});

const FormRegister = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password, nombres }) => {
    dispatch(registerAsync(email, password, nombres));
  };
  return (
    <Formik
      initialValues={{
        nombres: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            name='nombres'
            placeholder=' Ingresa Tu Nombre Completo'
            type='text'
            className='border-2 w-full rounded-md  p-2 outline-none hover:ring-2 hover:ring-caribbean-green-500  '
          />
          {errors.nombres && touched.nombres ? (
            <div className='px-2 text-red-500'>{errors.nombres}</div>
          ) : null}
          <Field
            name='email'
            placeholder=' Ingresa Tu Correo'
            type='email'
            className='border-2 w-full rounded-md  p-2 outline-none hover:ring-2 hover:ring-caribbean-green-500  mt-3'
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
          <Field
            name='confirmPassword'
            placeholder=' Confirma Tu Contraseña'
            type='password'
            className='border-2 w-full rounded-md  p-2 outline-none mt-3 hover:ring-2 hover:ring-caribbean-green-500'
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <div className='px-2 text-red-500'>{errors.confirmPassword}</div>
          ) : null}
          <button type='submit' className='btnLogin'>
            Registrarse
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormRegister;
