import './App.css';
import React from 'react';
import UserSignUp from './Components/UserSignUp';
import Header from './Components/Header'
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

          <Switch>
            <Route exact path="/" />
            <Route exact path="/signup" component={withContext(UserSignUp)}/>
          </Switch>

        </div>
      </BrowserRouter>
    </Provider>
    
    
  );
}

export default App;
