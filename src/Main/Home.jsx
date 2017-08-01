import React, { Component } from 'react';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';

class Home extends Component {
  render() {
    const home_page = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: 300
    }

    const h1Style = {
      color: "white",
      fontWeight: "bold",
      fontSize: 50,
      flex: 2,
      textAlign: "center"
    }

    const angle_double = {
      color: "white",
      fontWeight: "bold",
      fontSize: 50,
    }

    return(
      <div style={home_page}>
        <h1 style={h1Style}>HI I'M MINH, I MAKE WEBSITE</h1>
        <h3 className='angle-double' style={angle_double}><FaAngleDoubleRight /></h3>
      </div>
    );
  }
}
export default Home;
