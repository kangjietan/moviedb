import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import WatchedList from './WatchedList.jsx';
import ToWatchList from './ToWatchList.jsx';
import Results from './Results.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/watched" component={WatchedList} />
            <Route exact path="/watch-list" component={ToWatchList} />
            <Route path="/search" component={Results} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
