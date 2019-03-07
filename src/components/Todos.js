import React, { Component } from "react";

class Todos extends Component {
  render() {
    console.log(this.props.todos);
    return this.props.todos.map(todo => (
      <h3>{todo.title}</h3>
      // todo object. Dot notation to acess property
    ));
    // just like a forEach
  }
}

export default Todos;
