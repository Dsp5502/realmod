import { typesLogin } from '../Types/types';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth, google } from '../../Firebase/fireBaseConfing';

export const loginSync = (email, password) => ({
  type: typesLogin.login,
  payload: {
    email,
    password,
  },
});

export const loginAsync = (email, password) => {
  return async (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch(loginSync(email, password));
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// * LogOut
export const logoutSync = () => ({
  type: typesLogin.logOut,
});

export const logoutAsync = () => {
  return async (dispatch) => {
    await signOut(auth)
      .then(() => {
        dispatch(logoutSync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//* login Google

export const loginGoogle = () => {
  return async (dispatch) => {
    signInWithPopup(auth, google)
      .then((user) => {
        dispatch(loginSync(user.email, user.displayName));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
