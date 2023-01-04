import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const logger = require('redux-logger').default
const thunk = require('redux-thunk').default

const reducer = require('./reducer')
const initialState = require('./initialStates')

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: [...getDefaultMiddleware(), logger, thunk]
});

export default store