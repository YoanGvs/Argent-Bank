import { useEffect } from 'react'
import UserAccount from '../component/UserAccount'
import UserHeader from '../component/UserHeader'
import { getUser } from '../features/authUserApi'
import {
    selectCurrentToken,
    setUser,
} from '../features/authUserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const User = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(selectCurrentToken)

    useEffect(() => {
        if (!token) {
            navigate('/signin')
        } else {
            getUser(token).then((data) => dispatch(setUser(data.body)))
        }
    }, [])

    return (
        <>
            <main className="main bg-dark">
                <UserHeader />
                <h2 className="sr-only">Accounts</h2>
                <UserAccount
                    title="Argent Bank Checking (x8349)"
                    amount="$2,082.79"
                    description="Available Balance"
                />
                <UserAccount
                    title="Argent Bank Saving (x6712)"
                    amount="$10,928.42"
                    description="Available Balance"
                />
                <UserAccount
                    title="Argent Bank Credit Card (x8349)"
                    amount="$184.30"
                    description="Current Balance"
                />
            </main>
        </>
    )
}

export default User
