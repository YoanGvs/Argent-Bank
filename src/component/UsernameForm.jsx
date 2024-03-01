import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUsername } from '../features/authUserSlice'
import { updateUsername } from '../features/authUserApi'
import { useNavigate } from 'react-router-dom'

const UsernameForm = () => {
    const navigate = useNavigate()
    const handleEditClick = () => {
        navigate('/user')
    }
    const { token } = useSelector((state) => state.authUser)
    const [newUsername, setNewUsername] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const updatedUser = await updateUsername(token, newUsername)
            console.log('Updated user from API:', updatedUser)

            dispatch(setUsername(updatedUser.username))
        } catch (error) {
            console.error('Failed to update username:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">New Username:</label>
            <input
                id="username"
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
            />
            <button type="submit">save</button>
            <button onClick={handleEditClick}>cancel</button>
        </form>
    )
}

export default UsernameForm
