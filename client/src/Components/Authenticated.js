import React, {useContext} from 'react';
import {Context} from '../Context.js'


const Authenticated = (props) => {

    const context = useContext(Context);
    const user = context.authUser.name
    return (
        <React.Fragment>
            <h1> Authenticated </h1>
            <p>Hi, {user}.</p>
        </React.Fragment>
        
    )
}

export default Authenticated;