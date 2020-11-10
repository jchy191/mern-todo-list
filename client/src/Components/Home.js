import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {Context} from '../Context.js';


const Home = (props) => {
    const context = useContext(Context);
    const user = context.authUser;

    return (
        
       <h1 className="display-1 my-5">To-Do App</h1>
    )
}

export default Home;