import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
// Use IndexLinkContainer for the first link to prevent it from being active all the time
// Reason: https://github.com/reactjs/react-router-tutorial/tree/master/lessons/09-index-links
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './Navigation.css';
import jump from 'jump.js';

class Navigation extends Component {

  render() {
    return(
      <Navbar fixedTop>
        <Nav>
          <IndexLinkContainer to='/' onClick={() => jump('.home', {duration: 1000})}>
            <NavItem eventKey={2}>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to='/about' onClick={() => jump('.about-title', {duration: 1000})}>
            <NavItem eventKey={2}>About</NavItem>
          </LinkContainer>
          <LinkContainer to='/project' onClick={() => jump('.project-title', {duration: 1000})}>
            <NavItem eventKey={2}>Project</NavItem>
          </LinkContainer>
          <LinkContainer to='/blog'>
            <NavItem eventKey={2}>Blog</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <li role="presentation" className="social-link">
            <SocialIcon url="https://www.twitter.com/minhnguyen41092/" style={{ height: 25, width: 25 }}
              color="white" />
          </li>
          <li role="presentation" className="social-link">
            <SocialIcon url="https://www.facebook.com/GGUTD" style={{ height: 25, width: 25 }}
              color="white" />
          </li>
          <li role="presentation" className="social-link">
            <SocialIcon url="https://www.instagram.com/minhnguyen41092/" style={{ height: 25, width: 25 }}
              color="white" />
          </li>
          <li role="presentation" className="social-link">
            <SocialIcon url="https://www.github.com/MinhNguyen41092/" style={{ height: 25, width: 25 }}
              color="white" />
          </li>
        </Nav>
      </Navbar>
    )
  }
}

export default Navigation;
