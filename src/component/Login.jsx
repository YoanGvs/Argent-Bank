import { useDispatch, useSelector } from 'react-redux';
import { Link, } from 'react-router-dom';
import { selectCurrentUser, selectCurrentToken, logout } from '../features/authUserSlice';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const navigate = useNavigate()
  const token = useSelector(selectCurrentToken);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logout())
    navigate("/")
  }


  return (
    <div>
      {token ? (
        // Si l'utilisateur est connecté, afficher son prénom et le lien de déconnexion
        <div>
          <Link to="/user">
            <div className="main-nav-item" >
              <i className="fa fa-user-circle"></i> {currentUser?.userName}
            </div>
          </Link>
          <div className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-sign-out"  ></i> Sign out
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