import './App.css';
import React from 'react';
import UserSignUp from './Components/UserSignUp';
import Header from './Components/Header'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      
        <Header />

        <Switch>
          <Route exact path="/" />
          <Route exact path="/signup" component={UserSignUp}/>
        </Switch>

      </div>
    </BrowserRouter>
    
  );
}

export default App;
