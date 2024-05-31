import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from '../../redux/actions/user.actions.jsx';
import { isValidName } from "../../utils/regex.jsx";
import './Header.scss';
import { updateUsernameService } from '../../services/userService.jsx';

function Header() {
  const token = useSelector((state) => state.auth.token);
    const userData = useSelector((state) => state.user.userData);
    /* Manages the appearance of the username modification form */
    const [display, setDisplay] = useState(true);
    /* Get username */
    const [userName, setUserName] = useState('');
    /* Handle error message */
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    /* Asynchronous username update function */
    const handleSubmitUsername = async (event) => {
        event.preventDefault();
        if (!isValidName(userName)) {
            setErrorMessage("Invalid username");
            return;
        } else {
            setErrorMessage("");
        }
        try {
            const username = await updateUsernameService(token, userName);
    dispatch(updateUsername(username));
    setDisplay(!display);
  } catch (error) {
    console.error(error);
        }
    }
  return (
    <div className="header">
    { display ?
    <div>
      <h1>Welcome back<br />
      {userData.username} {userData.lastname} 
      </h1>

      <button className="edit-button"onClick={() => setDisplay(!display)}>Edit Name</button>
    </div>
    :
    <div>
                    <h2>Edit user info</h2>
                    <form>
                        <div className="edit-input">
                            <label htmlFor="username">User name:</label>
                            <input
                                type="text"
                                id="username"
                                defaultValue={userData.username}
                                onChange={(event) => setUserName(event.target.value)}
                            />
                        </div>
                        <div className="edit-input">
                            <label htmlFor="firstname">First name:</label>
                            <input
                                type="text"
                                id="firstname" 
                                defaultValue={userData.firstname}
                                disabled={true}
                            />
                        </div>
                        <div className="edit-input">
                            <label htmlFor="lastname">Last name:</label>
                            <input
                                type="text"
                                id="lastname" 
                                defaultValue={userData.lastname}
                                disabled={true}
                            />
                        </div>
                        <div className="buttons">
                            <button className="edit-username-button" onClick={handleSubmitUsername}>Save</button>
                            <button className="edit-username-button" onClick={() => setDisplay(!display)}>Cancel</button>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                </div>
            }
        </div>
    )
}


export default Header;
