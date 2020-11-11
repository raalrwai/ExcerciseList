import React, { useState, useContext, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ValueContext } from './ValueContext'
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const [login, setLogin] = useContext(ValueContext); 


    const updateLogin = () => {
    /*   loginWithRedirect() */
     setLogin({loggedIn:'true'});

    console.log(login.loggedIn + " = login.loggedinvalue after update")
    console.log('true log')
  };  

  return (
    !isAuthenticated && (
      <>
      <button onClick={() => loginWithRedirect() }>
        Log In
      </button>
      <h1>{login.loggedIn}</h1>
        </>
    )
  )
}

export default LoginButton