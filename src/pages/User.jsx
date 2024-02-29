import { useEffect } from "react";
import UserAccount from "../component/userAccount";
import UserHeader from "../component/userHeader";
import { getUser } from "../features/authUserApi";
import { selectCurrentToken, setUser } from "../features/authUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const User = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(selectCurrentToken)
    

    useEffect(() => {
        if (!token) {
          navigate('/signin'); // Remplacez '/login' par votre route de connexion si elle est différente
        } else {
          getUser(token).then(data => dispatch(setUser(data.body)));
        }
      }, [token, dispatch, navigate]);


    
    return (
        <>
            <main className="main bg-dark">
                <UserHeader
                    firstname="Yoan"
                    lastname="Govaerts"
                />
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

export default User;