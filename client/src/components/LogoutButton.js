import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ValueContext } from './ValueContext'
import "./app.css";


  const LogoutButton = () => {
 
    const [login, setLogin] = useContext(ValueContext);

  const { logout, isAuthenticated } = useAuth0();
  /*const updateLogin = () => {
     logout(); 
    setLogin({loggedIn:'false'});
    console.log(login.loggedIn + " = login.loggedinvalue after logout")
    console.log('false log')
    
  };
     let alreadySet = false;
    if(!alreadySet && isAuthenticated){
      alreadySet = true;
      updateLogin()
    }  
 useEffect(() => {
  updateLogin()
}, [isAuthenticated]); */


  return (
    
    isAuthenticated && (
      <>
      <button class ="button" onClick={() => {
        logout({ returnTo: window.location.origin });
      }}>Log out</button>
      
      {/* <h1>{login.loggedIn}</h1> */}
     
     
          
         
       
      
    
      </>
      
    )
   
    
  );
};

export default LogoutButton