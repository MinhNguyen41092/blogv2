import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './StaticPages/About';
import Project from './StaticPages/Project';
import Blog from './StaticPages/Blog';
import Contact from './StaticPages/Contact';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/blog' component={Blog}/>
      <Home>
        <Route exact path='/about' component={About}/>
        <Route exact path='/project' component={Project}/>
        <Route exact path='/contact' component={Contact}/>
      </Home>
    </Switch>
  </main>
)

export default Main;
