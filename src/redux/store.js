import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contact/contact-reducer';
import authReducer from './auth/auth-reducer';


const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
