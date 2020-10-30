import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import UserSignUp from './Components/UserSignUp';
import Header from './Components/Header'
import {Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import {Provider} from './Context';
import withContext from './Context';

const App = () => {


  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
        
          <Header />
          <Container fluid className="text-center">
            <Switch>
              <Route exact path="/" />
              <Route exact path="/signup" component={withContext(UserSignUp)}/>
            </Switch>
          </Container>      
        </div>
      </BrowserRouter>
    </Provider>
    
    
  );
}

export default App;
