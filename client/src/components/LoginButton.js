import React/* , { useContext } */ from 'react';
import "./app.css";
import { useAuth0 } from '@auth0/auth0-react';
/* import { ValueContext } from './ValueContext' */
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

 /* const [login, setLogin] = useContext(ValueContext); 


     const updateLogin = () => {
       loginWithRedirect() 
     setLogin({loggedIn:'true'});

    console.log(login.loggedIn + " = login.loggedinvalue after update")
    console.log('true log')
  };   */

  return (
    !isAuthenticated && (
      <>
      <button class ="button" onClick={() => loginWithRedirect() }>
        Log In
      </button>
      
        </>
    )
  )
}

export default LoginButton