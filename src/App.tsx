import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import 'assets/styles/app.scss';
import Dashboard from './feature/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Redirect to='/' />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
