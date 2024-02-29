import { createSlice } from '@reduxjs/toolkit';

export const authUserSlice = createSlice({
    name: 'authUser',
    initialState: {
        user: null, token: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.user = null
            state.token = null
        },
    },
});

export const { setUser, setToken, logout } = authUserSlice.actions;

export default authUserSlice.reducer;

export const selectCurrentUser = state => state.authUser.user
export const selectCurrentToken = state => state.authUser.token