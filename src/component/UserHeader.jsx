import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser, selectIsEditing, toggleIsEditing } from '../features/authUserSlice'
import EditProfile from './EditProfile'


export const UserHeader = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectCurrentUser)
    const isEditing = useSelector(selectIsEditing)

    const handleEditClick = () => {
        dispatch(toggleIsEditing())
    }
    return (
        <div className="header">
            <h1>
                Welcome back <br /> {user?.firstName} {user?.lastName} !
            </h1>
            {isEditing ? (
                <EditProfile />
            ) : (
                <button className="edit-button" onClick={handleEditClick}>
                    Edit Name
                </button>
            )
            }

        </div>
    )
}

export default UserHeader
