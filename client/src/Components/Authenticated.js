import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {Context} from '../Context.js'


const Authenticated = (props) => {

    const context = useContext(Context);
    const user = context.authUser
    return (
        <React.Fragment>
            {user && <Redirect to={`/user/${user.username}`}/>}
            <h1> Authenticated </h1>
            <p>Hi, {user.name}.</p>
        </React.Fragment>
        
    )
}

export default Authenticated;