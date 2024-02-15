import Logo from '../component/Logo'
 import Login from './Login'


const Header = () => {  
    return (
        
            <nav className='main-nav'>
                <Logo />
                <Login />
            </nav>
        
    )
}


export default Header