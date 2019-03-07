import React, { Component } from "react";

class Todos extends Component {
  render() {
    console.log(this.props.todos);
    return this.props.todos.map((todo));
    // just like a forEach
    );
  }
}

export default Todos;
