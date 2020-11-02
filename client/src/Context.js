import React, {useState} from 'react';
import Data from './Data';

const Context = React.createContext();

const Provider = (props) => {

    const [authUser, setAuthUser] = useState(null)

    const signIn = async (credentials) => { 
        const user = await Data.getUser(credentials)
        if (user !== null) {
            setAuthUser(user)
            return user;
        } 
        return null;
    }

    const signOut = () => {
        setAuthUser(null);
    }


    const value = {
        data: Data,
        authUser,
        actions: {
            signIn,
            signOut
        }
    }

    return(
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
    
}

export {Context, Provider};

