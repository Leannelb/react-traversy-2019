import React, { Component } from "react";
import TodoItem from "./Todoitem";

class Todos extends Component {
  render() {
    console.log(this.props.todos);
    return this.props.todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
      // todo object. Dot notation to acess property
    ));
    // just like a forEach
  }
}

export default Todos;
