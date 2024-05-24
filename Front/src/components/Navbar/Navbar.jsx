import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/actions/auth.actions';
import './Navbar.scss';
import logo from '../../assets/argentBankLogo.webp'

function Navbar () {

  const isConnected = useSelector((state) => state.auth.token);
  const firstname = useSelector((state) => state.user.userData.firstname);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logoutHandler = () => {
      dispatch(logout());
      sessionStorage.clear();
      localStorage.clear();
      navigate('/');
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      
      {isConnected ? (
                    <div className='connected'>
                        <Link to='/profile'>
                            <i className='fa-solid fa-2x fa-circle-user' />
                            <p>{firstname}</p>
                        </Link>
                        <Link to='/' onClick={logoutHandler}>
                            <i className='fa-solid fa-arrow-right-from-bracket' />
                            <p> Sign out </p>
                        </Link>
                    </div>
                ) : (
                    <div className='not-connected'>
                        <Link to='/login' >
                            <i className="fa-solid fa-circle-user"></i>
                            <p>Sign In</p>
        </Link>
      </div>
                )}
    </nav>
  );
}

export default Navbar;
