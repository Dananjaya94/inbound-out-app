import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveMenu from 'react-responsive-navbar';

import inbound from "./components/inbound.component";
import outbound from "./components/outbound.component";
import viewrep from "./components/view.component";
import reportCom from "./components/report.component";


function App() {

  return (
    <Router>
      <div className="container">


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="ceyins.lk" target="_blank">
            <img src={logo} width="50" height="50" alt="Ceyins"></img>
          </a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Inbound</Link>
              </li>

              <li className="navbar-item">
                <Link to="/outbound" className="nav-link">Outbound</Link>
              </li>

              <li className="navbar-item">
                <Link to="/view" className="nav-link">View</Link>
              </li>

              <li className="navbar-item">
                <Link to="/reports" className="nav-link">Reports</Link>
              </li>

            </ul>
          </div>
        </nav>
      <Route path = "/" exact component={inbound}/>
      <Route path = "/outbound" exact component={outbound}/>
      <Route path = "/view" exact component={viewrep}/>
      <Route path = "/reports" exact component={reportCom}/>
      </div>
    </Router>
  );
}

export default App;
