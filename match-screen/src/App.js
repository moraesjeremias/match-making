import React from 'react';
import MatchScreen from './Components/MatchScreen'
import Crud from './Components/Crud'
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = "/match-screen" component= {MatchScreen}></Route>
          <Route path = "/match-table" component = {Crud}></Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
