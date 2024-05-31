

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '../../redux/actions/user.actions.jsx';
import Header from '../../components/Header/Header';
import Account from '../../components/Account/Account';
import './User.scss';
import jsonData from '../../../data/userData.json';

function User() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
        const userData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    /* 
                        Checking that the query response is indeed retrieved
                        console.log(data) 
                    */
                    const userData = {
                        createdAt: data.body.createdAt,
                        updatedAt: data.body.updatedAt,
                        id: data.body.id,
                        email: data.body.email,
                        firstname: data.body.firstName,
                        lastname: data.body.lastName,
                        username: data.body.userName
                    }
                    /* Return user data in redux state */
                    dispatch(userProfile(userData));
                } else {
                    console.log("error while retrieving profile");
                }
            } catch (error) {
                console.error(error);
            }
        };
        userData();
    }
}, [dispatch, token]);

return (
  <main className={jsonData.main.className}>
    <Header />
    <h2 className={jsonData.main.children[1].className}>{jsonData.main.children[1].children}</h2>
    {jsonData.main.children.slice(2).map((child, index) => (
      <Account
        key={index}
        title={child.title}
        amount={child.amount}
        description={child.description}
      />
    ))}
  </main>
);
}
export default User;

