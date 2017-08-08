import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    const contact = {
      backgroundColor: "#38D9E5",
      addingRight: "0px",
      paddingLeft: "0px",
      paddingBottom: "60px"
    }

    return(
      <div className="container-fluid" style={contact}>
        <p className="contact-me">Yes I'm open for hiring</p>
        <p className="intro">I'm looking forward to working with enthusiastic employees like you<br/>
          Please take a few minutes and tell me about your vision.</p>
        <div className="text-center mail">

          <a href="mailto:minhnguyen041092@gmail.com" className="btn btn-lg">Contact me</a>

        </div>
      </div>
    )
  }
}

export default Contact;
