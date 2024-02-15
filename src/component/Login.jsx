import  { Link} from 'react-router-dom';

export const Login = () => {
    return (
        <div>
            <Link className="main-nav-item" to={`./signin`}>
                <i className="fa fa-user-circle" ></i>
                Sign In 
            </Link>
        </div>
        
    )
}
export default Login