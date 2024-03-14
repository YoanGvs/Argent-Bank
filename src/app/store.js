import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from '../features/authUserSlice'

export const store = configureStore({
    reducer: {
        authUser: authUserReducer,
    },
})
