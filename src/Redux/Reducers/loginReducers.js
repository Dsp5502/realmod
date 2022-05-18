import { typesLogin } from '../Types/types';

export const LoginReducers = (state = {}, action) => {
  switch (action.type) {
    case typesLogin.login:
      return {
        email: action.payload.email,
        password: action.payload.password,
      };
    case typesLogin.logOut:
      return {};
    default:
      return state;
  }
};
