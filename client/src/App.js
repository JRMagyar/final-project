import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/index";
import Dashboard from "./pages/Dashboard/index";
import Expenses from "./pages/Expenses/index";
import Finances from "./pages/Finances/index";
import Nav from "./components/NavBar/index"

class App extends Component {
  render() {
    return (
        <Router>
          <div id="root">
            <Nav />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/expenses" component={Expenses} />
              <Route exact path="/finances" component={Finances} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  
export default App;