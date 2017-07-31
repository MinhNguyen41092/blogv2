import React, { Component } from 'react';

class Home extends Component {
  render() {
    const h1Style = {
      color: "white",
      fontWeight: "bold",
      fontSize: 50,
      position: "absolute",
      flex: 1,
    }

    return(
      <div>
        <h1 className='text-center' style={h1Style}>HI I'M MINH, I MAKE WEBSITE</h1>
      </div>
    );
  }
}
export default Home;
