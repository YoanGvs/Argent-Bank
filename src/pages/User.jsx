import UserAccount from "../component/userAccount";
import UserHeader from "../component/userHeader"; 

export const User = () => {
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