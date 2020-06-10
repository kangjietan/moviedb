import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import WatchedList from './WatchedList.jsx';
import ToWatchList from './ToWatchList.jsx';
import Results from './Results.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search/:name" component={Results} />
            <Route path="/watched" exact component={WatchedList} />
            <Route path="/watch-list" exact component={ToWatchList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
