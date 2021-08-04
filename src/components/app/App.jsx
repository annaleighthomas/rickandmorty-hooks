import React, { Component } from 'react';
import RickAndMorty from '../../containers/RickAndMorty';
import DetailPage from './characters/DetailPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <RickAndMorty {...routerProps} />
                )}
              />

              <Route path="/detailpage/:id" exact={true}
                render={routerProps => (
                  <DetailPage {...routerProps} />
                )}
              />
              <Redirect to="/" />

            </Switch>
          </main>
        </Router>
      </div>
    );
  }

}

export default App;