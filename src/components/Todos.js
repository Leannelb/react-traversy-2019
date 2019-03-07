import React, { Component } from "react";

class Todos extends Component {
  render() {
    console.log(this.props.todos);
    return (
      <div className="App">
        <h1>Hi</h1>
      </div>
    );
  }
}

export default Todos;
