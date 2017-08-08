import React, { Component } from 'react';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';
import {Link} from 'react-router-dom'
import About from './StaticPages/About';
import Project from './StaticPages/Project';
import jump from 'jump.js';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const home_page = {
      display: "flex",
      flexDirection: "column",
      alignContent: "space-around",
      alignItems: "center",
      justifyContent: "flex-end",
      height: "100vh",
      marginTop: 0
    }

    const h1Style = {
      color: "white",
      fontWeight: "bold",
      fontSize: 50,
      textAlign: "center",
      paddingTop: 200,
      flex: 2
    }

    return(
      <div>
        <div className="home" style={home_page}>
          <h1 style={h1Style}>HI I'M MINH, I MAKE WEBSITE</h1>
          <Link to='/about' className="to-about" onClick={() => jump('.about-title', {duration: 1000})}>
            <h5 className="learn_more">Learn more about me</h5>
            <div className="angle-double">
              <FaAngleDoubleDown style={{verticalAlign: "baseline"}}/>
            </div>
          </Link>
        </div>
        <About />
        <Project />
      </div>
    );
  }
}
export default (Home);
