import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './StaticPages/About';
import Project from './StaticPages/Project';
import Blog from './StaticPages/Blog';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Home>
        <Route path='/about' component={About}/>
        <Route path='/project' component={Project}/>
      </Home>
      <Route exact path='/blog' component={Blog}/>
    </Switch>
  </main>
)

export default Main;
