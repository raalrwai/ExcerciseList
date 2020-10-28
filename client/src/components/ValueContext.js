import React, {useState, createContext} from 'react';

export const ValueContext = createContext();

export const ValueProvider = props => {
    const [login, setLogin] = useState([
        {
            loggedIn: 'true'
        }

    ]);

    return(
    <ValueContext.Provider value='Hello this work'>
        {props.children}
        </ValueContext.Provider>
    );
}