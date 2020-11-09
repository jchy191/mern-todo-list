import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context } from './Context';

const PrivateRoute = ({ component: Component, ...rest }) => { 

    const context = useContext(Context);

    return (
        <Route
          {...rest} 
          render={props => context.authUser ? (
            <Component {...props}/>
          ) : (
            <Redirect to={{
              pathname: '/signin',
            }}/>
          )}
        />
    );
};

export default PrivateRoute;