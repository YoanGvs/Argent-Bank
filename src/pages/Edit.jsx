import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import UserAccount from '../component/UserAccount'
import UsernameForm from '../component/UsernameForm'
import { getUser } from '../features/authUserApi'
import {
    selectCurrentToken,
    setUser,
    selectCurrentUser,
    logout,
} from '../features/authUserSlice'
import { useNavigate } from 'react-router-dom'
const Edit = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const navigate = useNavigate()
    const handleSignOut = () => {
        dispatch(logout())
    }
    const username = currentUser?.username

    useEffect(() => {
        if (!token) {
            navigate('/signin')
        } else {
            getUser(token).then((data) => dispatch(setUser(data.body)))
        }
    }, [token])
    return (
        <div>
            <div className="nav-container">
                <div className="logo-container">
                    <i className="fa-solid fa-vault"> argent bank</i>
                </div>
                <nav className="edit">
                    <i className="fa-solid fa-circle-user"> {username}</i>
                    <i className="fa-solid fa-gear"></i>
                    <i
                        className="fa-solid fa-power-off"
                        onClick={handleSignOut}
                    ></i>
                </nav>
            </div>
            <div className="form-container">
                <h2>Edit user info</h2>
                <UsernameForm />
            </div>
            <UserAccount />
            <UserAccount />
            <UserAccount />
        </div>
    )
}

export default Edit
