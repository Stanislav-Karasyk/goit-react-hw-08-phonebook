import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
} from './auth-actions.js';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const register = credentials => async dispatch => {
  dispatch(registerRequest());
  try {
    const {data} = await axios.post('​/users​/signup', credentials);
    dispatch(registerSuccess(data));
  } catch (error) {
      dispatch(registerError(error))
  }
};

export {register}
