import { typesRegister } from '../Types/types';

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case typesRegister.register:
      return {
        nombres: action.payload.nombres,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
