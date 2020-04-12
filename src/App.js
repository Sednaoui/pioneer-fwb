import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Subscriptions from './Subscriptions';

function App() {
    return (
        <React.Fragment>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/signin" component={SignIn}></Route>
              <Route exact path="/signup" component={SignUp}></Route>
              <Route exact path="/subscriptions" component={Subscriptions}></Route>
            </Switch>
          </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
