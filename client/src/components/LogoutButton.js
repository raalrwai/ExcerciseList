import React, { useState, useContext, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ValueContext } from './ValueContext'

  const LogoutButton = () => {
 
    const [login, setLogin] = useContext(ValueContext);
  /*   const updateLogin = () => {
      setLogin('True');
    }   */
  const { logout, isAuthenticated } = useAuth0();
  const updateLogin = () => {
   /*  logout(); */
    setLogin({loggedIn:'false'});
    console.log(login.loggedIn + " = login.loggedinvalue after logout")
    console.log('false log')
    
  };
 /*    let alreadySet = false;
    if(!alreadySet && isAuthenticated){
      alreadySet = true;
      updateLogin()
    }  */ 
/* useEffect(() => {
  updateLogin()
}, [isAuthenticated]); */


  return (
    
    isAuthenticated && (
      <>
      <button onClick={() => logout()}>
        Log Out
      </button>
      
      <h1>{login.loggedIn}</h1>
     
     
          
         
       
      
    
      </>
      
    )
   
    
  );
};

export default LogoutButton