import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  import About from './About'
  import Home from './Home'
  import './nav.css'
import logo from "./logo.png"

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={"/home"}><img src={logo} style={{height:"80px"}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink as={Link} to={"/home"} activeClassName="main-nav-active" class="navtab" >Home</NavLink>
                        <NavLink as={Link} to={"/Products"} activeClassName="main-nav-active" class="navtab" >Products</NavLink>
                        <NavLink  as={Link} to={"/about"} activeClassName="main-nav-active">About Me</NavLink>
                        <NavLink  as={Link} to={"/demos"} activeClassName="main-nav-active">Demos</NavLink>
                        <NavLink  as={Link} to={"/Contactus"} activeClassName="main-nav-active">Contact Us</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
            <div>
            <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
            </div>
            </Router>
        )
    }
}
