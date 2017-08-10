import React, { Component } from 'react';
import Navigation from'./NavBar/Navigation';
import Main from './Main/Main';
import ReactDom from 'react-dom';

class App extends Component {
  componentDidMount() {
    this.changeNavColor();
  }

  changeNavColor() {
    var navbar = document.getElementsByClassName('navbar')[0];
    var nav_items = document.body.getElementsByTagName('li');
    document.addEventListener("scroll", function()  {
      if(document.body.scrollTop > 520 && document.body.scrollTop < 1350) {
        navbar.style.backgroundColor = '#3FBFAA';
        nav_items[0].classList.remove('active');
        nav_items[1].classList.add('active');
        nav_items[2].classList.remove('active');
      } else if(document.body.scrollTop > 1350 && document.body.scrollTop < 1700) {
        navbar.style.backgroundColor = '#3FBFAA';
        nav_items[3].classList.remove('active');
        nav_items[2].classList.add('active');
        nav_items[1].classList.remove('active');
      } else if(document.body.scrollTop > 1700) {
        navbar.style.backgroundColor = '#3FBFAA';
        nav_items[3].classList.add('active');
        nav_items[2].classList.remove('active');
        nav_items[0].classList.remove('active');
      } else {
        navbar.style.backgroundColor = '';
        nav_items[0].classList.add('active');
        nav_items[1].classList.remove('active');
      }
    });
  }

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
