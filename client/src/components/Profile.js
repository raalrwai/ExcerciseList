import React, { useState, useContext} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import { ValueContext } from './ValueContext'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [login, setLogin] = useContext(ValueContext);
  return (
    isAuthenticated && ( 
     <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h1>{login.loggedIn}</h1>
        <JSONPretty data={user} />
        {/* {JSON.stringify(user, null, 2)} */}
      </div>
    )
  )
}

export default Profile