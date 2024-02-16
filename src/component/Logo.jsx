import logo from '../assets/img/argentBankLogo.png'
import { Link } from 'react-router-dom'

export const Logo = () => {
    return (
        <Link to="/" className="main-nav-logo">
            <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
    )
}
export default Logo