import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import authUserReducer from '../features/authUserSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authUser: authUserReducer,
  },
})