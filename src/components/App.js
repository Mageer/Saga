import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';
import PageNotFound from './PageNotFound';

function App() {
  return(
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
    </Router>
  );
};

export default App;
