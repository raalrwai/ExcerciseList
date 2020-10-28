import React, { useState, useContext} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ValueContext } from './ValueContext'

  const LogoutButton = () => {
    const value = useContext(ValueContext);
    const [login, setLogin] = useContext(ValueContext);
    
  const { logout, isAuthenticated } = useAuth0();
  

  return (
    
    isAuthenticated && (
      <>
      <button onClick={() => logout()}>
        Log Out
      </button>
      <h1>{value}</h1>
    
      </>
      
    )
    
  );
};

export default LogoutButton