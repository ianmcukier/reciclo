import React, { Component } from 'react';
import User from './containers/User/User';
import TradePoint from './containers/TradePoint/TradePoint';
import {
  Switch, Route, withRouter,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/troca" component={TradePoint} />
          <Route path="/usuario" component={User} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
