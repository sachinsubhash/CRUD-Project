import React, { Component } from "react";
import UserProfile from "./UserProfile";
// import axios from "axios";
import { Router, Switch, Route } from "react-router-dom";
import UserUpdate from "./UserUpdate";
import history from './History'
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Delete from "./Delete";
// import GetNew from "./GetNew";
// import MainOffer from './MainOffer'
// import Database from './Database'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Read} />
            <Route path='/create' component={Create} />
            <Route path='/update' component={Update} />
            <Route path='/delete' component={Delete} />
          </Switch>
        </Router>
      </div>
    );
  }
}
