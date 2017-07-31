import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './StaticPages/About';
import Project from './StaticPages/Project';
import Blog from './StaticPages/Blog';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/project' component={Project}/>
      <Route exact path='/blog' component={Blog}/>
    </Switch>
  </main>
)

export default Main;
