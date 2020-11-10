import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import UserSignUp from './Components/UserSignUp';
import UserSignIn from './Components/UserSignIn';
import UserSignOut from './Components/UserSignOut';
import UserPage from './Components/UserPage';
import Error from './Components/Error';
import Home from './Components/Home';
import Header from './Components/Header';
import PrivateRoute from './PrivateRoute';
import {Container} from 'react-bootstrap';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import {Provider} from './Context';

const App = () => {


  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
        
          <Header />
          <Container fluid className="text-center">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/signup" component={UserSignUp}/>
              <Route exact path="/signin" component={UserSignIn}/>
              <Route exact path="/signout" component={UserSignOut}/>
              <PrivateRoute path="/user/" component={UserPage}/>
              <Route path="/error" component={Error}/>
              
            </Switch>
          </Container>      
        </div>
      </BrowserRouter>
    </Provider>
    
    
  );
}

export default App;
