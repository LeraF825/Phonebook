import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlice';
import { authReducer } from './auth/authSlice';

export const reducer = combineReducers({
  contacts: contactReducer,
  auth: authReducer,
});