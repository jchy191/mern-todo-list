import React, {useState} from 'react';
import Data from './Data';

const Context = React.createContext();

const Provider = (props) => {

  

    const signIn = async (credentials) => { 
        const user = await this.data.getUser(credentials)
        if (user !== null) {

        }
    }


    const value = {
        data: Data,
        actions: {
            signIn
        }
    }

    return(
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
    
}

export {Context, Provider};

