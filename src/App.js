import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { DragonsList } from "./features/dragons/DragonsList";

import { SingleDragonPage } from "./features/dragons/SingleDragonPage";

const params = { params: { dragonId: "5e9d058759b1ff74a7ad5f8f" } };

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <SingleDragonPage match={params} />
                <DragonsList />
              </React.Fragment>
            )}
          />
          5e9d058759b1ff74a7ad5f8f
          <Route exact path="/dragons/:dragonId" component={SingleDragonPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
