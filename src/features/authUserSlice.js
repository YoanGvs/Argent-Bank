import { createSlice } from '@reduxjs/toolkit'

export const authUserSlice = createSlice({
    name: 'authUser',
    initialState: {
        user: null,
        token: null,
        isEditing: false
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        logout: (state) => {
            state.user = null
            state.token = null
        },
        toggleIsEditing: (state) => {
            state.isEditing = !state.isEditing
        }
    },
})

export const { setUser, setToken, logout, toggleIsEditing } = authUserSlice.actions

export default authUserSlice.reducer

export const selectCurrentUser = (state) => state.authUser.user
export const selectCurrentToken = (state) => state.authUser.token
export const selectIsEditing = (state) => state.authUser.isEditing
