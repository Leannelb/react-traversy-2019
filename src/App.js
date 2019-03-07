import React, { Component } from "react";
import Todos from "./components/Todos";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner",
        completed: false
      },
      {
        id: 3,
        title: "Meeting",
        completed: false
      }
    ]
  };
}

export default App;
