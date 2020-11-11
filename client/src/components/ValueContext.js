import React, {useState, createContext} from 'react';

export const ValueContext = createContext();

export const ValueProvider = props => {
    const [login, setLogin] = useState(
        {
            loggedIn: 'false',
            
        },
    );

    return(
    <ValueContext.Provider value={[login,setLogin]}>
        {props.children}
        </ValueContext.Provider>
    );
}