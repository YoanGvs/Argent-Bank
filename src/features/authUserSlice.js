import {createSlice} from '@reduxjs/toolkit';   

export const authUserSlice = createSlice({
    name: 'authUser',
    initialState: {
        token: "",
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token ;
            
        },
        logout: (state) => {
            state = {
                token: "",
                // user: {}
            };
            return state;
        },
    }, 
});

export const { login, logout } = authUserSlice.actions;
export default authUserSlice.reducer;