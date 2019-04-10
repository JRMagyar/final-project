import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login/index";
import Dashboard from "./pages/Dashboard/index";
import Expenses from "./pages/Expenses/index";
import Finances from "./pages/Finances/index";
import Nav from "./components/NavBar/index";
// import AddSection from "../../components/AddSection/index";

const fakeAuth = {
  isAuth: true,
  auth(cb) {
    this.isAuth = true;
    setTimeout(cb, 100) //fake async
  },
  signOut(cb) {
    this.isAuth = false;
    setTimeout(cb, 100) //fake async
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuth === true
    ? <Component {...props} />
    : <Redirect to="/" />
  )} />
)

class App extends Component {
  render() {
    return (
        <Router>
          <div>
              <Nav />
              <Route exact path="/" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/expenses" component={Expenses} />
              <PrivateRoute exact path="/finances" component={Finances} />
          </div>
        </Router>
      );
    }
  }
  
export default App;