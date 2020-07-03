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

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {

  return (
    

    <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
                style={{'background-color':'blue'}}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="inbound">
                    <NavItem eventKey="inbound">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Inbound
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="outbound">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Outbound
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="view">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            View
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="reports">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Reports
                        </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/" exact component={inbound} />
                <Route path="/inbound" component={inbound} />
                <Route path="/outbound" component={outbound} />
                <Route path="/view" component={viewrep} />
                <Route path="/reports" component={reportCom} />
            </main>
        </React.Fragment>
    )}
    />
</Router>
    
    

    
  );
}

export default App;
