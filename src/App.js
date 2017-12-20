import React, { Component } from "react";
import Lists from "./components/Lists";
import AddList from "./components/AddList";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: ["First List", "Second List", "One more List"],
      todos: []
    };
    this.addList = this.addList.bind(this);
  }

  addList(title) {
    const lists = this.state.lists.concat(title);
    this.setState({
      lists: lists
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to Trello Board</h2>
        <AddList addList={this.addList} />
        {this.state.lists.map((list, i) => {
          return <Lists title={list} key={i} />;
        })}
      </div>
    );
  }
}

export default App;
