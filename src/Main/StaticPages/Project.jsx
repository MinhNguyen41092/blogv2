import React, { Component } from 'react';
import './Project.css'
class Project extends Component {
  render() {
    const project = {
      backgroundColor: "white",
      paddingRight: "0px",
      paddingLeft: "0px",
      paddingBottom: "60px",
    }

    const keys = {
      fontWeight: 700,
      fontFamily: "'Montserrat',Helvetica,sans-serif",
      marginTop: 5,
      textAlign: "center",
      marginTop: 10
    }

    const techs = {
      textAlign: "center"
    }

    return(
      <div className="container-fluid" style={project}>
        <h1 className="project-title">Projects</h1>
        <div className="row">
          <div className="col-xs-4">
            <a href="https://github.com/MinhNguyen41092/Tours-booking-system">
              <div className="fram-tour">
                <p className="project-name">Tour Booking System</p>
              </div>
            </a>
            <h5 style={keys}>Key technologies:</h5>
            <h6 style={techs}>Devise, Omniauth, ActiveMerchants, RSpec</h6>
          </div>
          <div className="col-xs-4">
            <a href="https://github.com/MinhNguyen41092/blogv1">
              <div className="my-blog">
                <p className="project-name">Personal Blog and Porfolio</p>
              </div>
            </a>
            <h5 style={keys}>Key technologies:</h5>
            <h6 style={techs}>RESTful API, ReactJS, RSpec, Capybara</h6>
          </div>
          <div className="col-xs-4">
            <a href="https://github.com/MinhNguyen41092/Ecommerce">
              <div className="ecommerce">
                <p className="project-name">Ecommerce</p>
              </div>
            </a>
            <h5 style={keys}>Key technologies:</h5>
            <h6 style={techs}>Rails basic, Bootstrap</h6>
          </div>
        </div>
        <h6 className="see-more"><a href="https://github.com/MinhNguyen41092/">See more on Github</a></h6>
      </div>
    );
  }
}
export default Project;
