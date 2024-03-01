import Logo from '../component/Logo'
import Login from './Login'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()

    if (location.pathname === '/edit') {
        return null
    }
    return (
        <nav className="main-nav">
            <Logo />
            <Login />
        </nav>
    )
}

export default Header
