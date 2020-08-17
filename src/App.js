import React, { Children } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveMenu from 'react-responsive-navbar';

import inbound from "./components/inbound.component";
import outbound from "./components/outbound.component";
import viewrep from "./components/view.component";
import reportCom from "./components/report.component";
import ClickOutside from "./ClickOutside";
import exampl from "./components/example.conponent";
import signIn from "./components/signin";
import repairandreplacements from "./components/repairandreplacement.component";


import exp from "./components/example.conponent";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

var routeStat = false;


function App() {
    let HideSideNav = window.location.pathname === '/' ? null : <SideNav/>
    
    function checkRoute(){
        if(window.location.pathname === '/')
        {
            routeStat = true;
        }
        else if((window.location.pathname === '/inbound')||(window.location.pathname === '/outbound')||(window.location.pathname === '/'))
        {
            routeStat = false;
        }
    };
    
  return (
      
    <div className = "container" onLoad = {checkRoute()}>
        <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                        window.location.reload(false);
                    }
                }}
                style={{'backgroundColor':'purple'}}
                disabled = {routeStat}
            >
                {/* defaultSelected="inbound" */}
                <SideNav.Toggle />
                <SideNav.Nav >
                    <NavItem eventKey="inbound" disabled = {routeStat}>
                        <NavIcon>
                            <i className="fa fa-fw fa-inbound" style={{ fontSize: '1.75em'}} />
                        </NavIcon>
                        <NavText>
                            Inbound
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="outbound" disabled = {routeStat}>
                        <NavIcon>
                            <i className="fa fa-fw fa-outbound" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Outbound
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="view" disabled = {routeStat}>
                        <NavIcon>
                            <i className="fa fa-fw fa-view" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            View
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="reports" disabled = {routeStat}>
                        <NavIcon>
                            <i className="fa fa-fw fa-reports" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Reports
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="repairandrep" disabled = {routeStat}>
                        <NavIcon>
                            <i className="fa fa-fw fa-repairandrep" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Repair and Replacement
                        </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/" exact component={signIn} />
                <Route path="/inbound" component={inbound} />
                <Route path="/outbound" component={outbound} />
                <Route path="/view" component={viewrep} />
                <Route path="/reports" component={reportCom} />
                <Route path="/repairandrep" component={repairandreplacements}/>
            </main>
        </React.Fragment>
    )}
    />

{/* <ClickOutside
    onClickOutside={() => {
        this.setState({ expanded: false });
    }}
>
    <SideNav
        expanded={this.state.expanded}
        onToggle={(expanded) => {
            this.setState({ expanded });
        }}
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
</ClickOutside> */}

</Router>
    </div>
    
    

    
  );
}

export default App;
