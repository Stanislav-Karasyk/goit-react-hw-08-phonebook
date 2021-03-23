import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {});

const token = createReducer(null, {});

const error = createReducer(null, {});

export default combineReducers({
  user,
  token,
  error,
});
