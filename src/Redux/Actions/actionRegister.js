import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/fireBaseConfing';
import { typesRegister } from '../Types/types';

export const registerSync = (email, password, nombres) => ({
  type: typesRegister.register,
  payload: {
    nombres,
    email,
    password,
  },
});

export const registerAsync = (email, password, nombres) => {
  return async (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        await updateProfile(auth.currentUser, {
          displayName: nombres,
        });
        dispatch(registerSync(email, password, nombres));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
