import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./views/login/Login";
import Profile from "./views/profile/Profile";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const routes = () =>{
  return(
  <Router>
    <Switch>     
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>
  )  
}

ReactDOM.render(
  <React.StrictMode>
    {routes()}  
   </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
