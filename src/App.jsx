import React, { Component } from 'react';
import Navigation from'./NavBar/Navigation';
import Main from './Main/Main';

class App extends Component {

  render() {

    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  }
}
export default App;
