import React, { Component } from 'react';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';
import {Link} from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {arrowState: true};
  }

  changeStyle(arrowState) {
    this.setState({arrowState: !arrowState});
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.changeStyle(this.state.arrowState),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const home_page = {
      display: "flex",
      flexDirection: "column",
      alignContent: "space-around",
      alignItems: "center",
      justifyContent: "flex-end",
      height: "80vh"
    }

    const h1Style = {
      color: "white",
      fontWeight: "bold",
      fontSize: 50,
      textAlign: "center",
      paddingTop: 100,
      flex: 2
    }

    const angle_small = {
      color: "white",
      fontWeight: "bold",
      fontSize: 50,
      transition: "font-size 600ms ease"
    }

    const angle_big = {
      color: "white",
      fontWeight: "bold",
      fontSize: 80,
      transition: "font-size 600ms ease"
    }

    return(
      <div>
        <div style={home_page}>
          <h1 style={h1Style}>HI I'M MINH, I MAKE WEBSITE</h1>
          <Link to='/about'>
            <div className={'angle-double'}
              style={this.state.arrowState ? angle_small : angle_big}>
              <FaAngleDoubleDown style={{verticalAlign: "baseline"}}/>
            </div>
          </Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
export default Home;
