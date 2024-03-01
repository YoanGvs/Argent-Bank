import { useNavigate } from 'react-router-dom'

export const UserHeader = ({ firstname, lastname }) => {
    const navigate = useNavigate()

    const handleEditClick = () => {
        navigate('/edit')
    }
    return (
        <div className="header">
            <h1>
                Welcome back <br /> {firstname} {lastname} !
            </h1>
            <button className="edit-button" onClick={handleEditClick}>
                Edit Name
            </button>
        </div>
    )
}

export default UserHeader
