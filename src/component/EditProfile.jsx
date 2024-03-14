import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    selectCurrentUser,
    selectCurrentToken,
    setUser,
    toggleIsEditing
} from '../features/authUserSlice'
import { updateUsername } from '../features/authUserApi'

const EditProfile = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const [userName, setUserName] = useState('')
    const handleUserNameInput = (e) => setUserName(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()
        updateUsername(token, userName)
            .then(data => dispatch(setUser(data.body)))
    }

    return (
        <form className="form-edit-profile" onSubmit={handleSubmit}>
            <div className="column">
                <input
                    type="text"
                    onChange={handleUserNameInput}
                    value={userName}
                    placeholder={user?.userName}
                    required
                />
                <input
                    type="text"
                    value={user?.firstName}
                    placeholder={user?.firstName}
                    disabled
                />
                <input
                    type="text"
                    value={user?.lastName}
                    placeholder={user?.lastName}
                    disabled
                />
            </div>
            <div className="row">
                <button className="button-edit-profile">Save</button>
                <button
                    className="button-edit-profile"
                    onClick={() => dispatch(toggleIsEditing())}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default EditProfile
