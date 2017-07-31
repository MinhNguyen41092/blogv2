import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './Navigation.css'

class Navigation extends Component {

  render() {
    return(
      <Navbar collapseOnSelect>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/'>
              <NavItem eventKey={2}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to='/about'>
              <NavItem eventKey={2}>About</NavItem>
            </LinkContainer>
            <LinkContainer to='/project'>
              <NavItem eventKey={2}>Project</NavItem>
            </LinkContainer>
            <LinkContainer to='/blog'>
              <NavItem eventKey={2}>Blog</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#"></NavItem>
            <NavItem eventKey={2} href="#"></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;
