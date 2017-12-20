import React, { Component } from "react";
import TodoList from "./components/TodoList";
import AddList from "./components/AddList";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [
        { title: "First List", id: Date.now() * Math.random() },
        { title: "Second List", id: Date.now() * Math.random() },
        { title: "One more List", id: Date.now() * Math.random() }
      ],
      todos: []
    };
    this.addList = this.addList.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
  }

  addList(title, id) {
    const lists = this.state.lists.concat({ title, id });
    this.setState({
      lists: lists
    });
  }

  addNewTask(listId, text) {
    const todos = this.state.todos.concat({ listId, text });
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <h2>Welcome to Custom Trello Board</h2>
        <AddList addList={this.addList} />
        {this.state.lists.map((list, i) => {
          return (
            <TodoList
              key={i}
              addNewTask={this.addNewTask}
              id={list.id}
              title={list.title}
              todos={this.state.todos.filter(
                ({ listId }) => listId === list.id
              )}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
