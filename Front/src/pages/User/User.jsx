

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '../../redux/actions/user.actions.jsx';
import Header from '../../components/Header/Header';
import Account from '../../components/Account/Account';
import './User.scss';

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
    
    <main className="main bg-dark">
      <Header />
      <h2 className="sr-only">Accounts</h2>
      <Account 
        title="Argent Bank Checking (x8349)" 
        amount="$2,082.79" 
        description="Available Balance" 
      />
      <Account 
        title="Argent Bank Savings (x6712)" 
        amount="$10,928.42" 
        description="Available Balance" 
      />
      <Account 
        title="Argent Bank Credit Card (x8349)" 
        amount="$184.30" 
        description="Current Balance" 
      />
    </main>
    
  );
}

export default User;

