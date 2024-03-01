import { useDispatch, useSelector } from 'react-redux';
import  { Link, } from 'react-router-dom';
import { selectCurrentUser, selectCurrentToken, logout  } from '../features/authUserSlice';



export const Login = () => {
    const token = useSelector(selectCurrentToken);
    const currentUser = useSelector(selectCurrentUser);
    const firstName = currentUser?.firstName;
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(logout())
    }


    return (
      <div>
        {token ? (
          // Si l'utilisateur est connecté, afficher son prénom et le lien de déconnexion
          <div onClick={handleSignOut}>
            <div className="main-nav-item" >
              <i className="fa fa-user-circle"></i> {firstName}
            </div>
            <div className="main-nav-item" >
              <i className="fa fa-sign-out" ></i> Sign out
            </div>
          </div>
        ) : (
          // Si l'utilisateur n'est pas connecté, afficher le lien de connexion
          <Link to="/signin">
            <div className="main-nav-item">
              <i className="fa fa-user-circle"></i> Sign In
            </div>
          </Link>
        )}
      </div>
    );
  };
export default Login