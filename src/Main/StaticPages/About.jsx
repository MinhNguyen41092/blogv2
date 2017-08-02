import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class About extends Component {
  componentDidMount() {
    var about = ReactDOM.findDOMNode(this);
    about.style.opacity = 0;
    // Scroll to bottom
    about.scrollIntoView(false);
    window.requestAnimationFrame(function(){
      about.style.transition = "opacity 250ms";
      about.style.opacity = 1;
    });
  }

  render() {
    const about = {
      color: "black",
      backgroundColor: "white",
    }

    return(
      <div className="container-fluid" style={about}>
        <h1 className='text-center'>About</h1>
      </div>
    );
  }
}
export default About;
