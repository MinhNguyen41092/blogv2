import React, { Component } from 'react';

class Blog extends Component {
  render() {
    const blog = {
      textAlign: "center",
      marginTop: "200px"
    }

    return(
      <div>
        <h1 style={blog}>Under development</h1>
      </div>
    );
  }
}
export default Blog;
