import "./app.css";
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
//this is working for both dev and prod
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
  
      <button onClick={() => loginWithRedirect()}>
        Log In
      </button>
    
  )
}

export default LoginButton