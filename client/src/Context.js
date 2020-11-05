import React, {useState} from 'react';
import Cookies from 'js-cookie';
import Data from './Data';

const Context = React.createContext();

const Provider = (props) => {

    const [authUser, setAuthUser] = useState(Cookies.getJSON('authenticatedUser') || null);

    const signIn = async (credentials) => { 
        const user = await Data.getUser(credentials);
        if (user !== null) {
            setAuthUser(user);
            Cookies.set('authenticatedUser', JSON.stringify(user), {expires: 1});
            return user;
        } 
        return null;
    }

    const signOut = () => {
        setAuthUser(null);
        Cookies.remove('authenticatedUser');
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

