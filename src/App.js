import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import AppSR from "./AppSR/AppSR";
import AppEN from "./AppEN/AppEN";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/EN">
            <AppEN />
          </Route>
          <Route path="/">
            <AppSR />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
