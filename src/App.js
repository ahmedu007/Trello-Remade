import React, { Component } from "react";
import TodoList from "./components/TodoList";
import AddList from "./components/AddList";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [
        {
          id: 1036028926122.7329,
          title: "List # 1"
        },
        {
          id: 1162410477426.691,
          title: "List # 2"
        }
      ],
      todos: [
        {
          listId: 1036028926122.7329,
          text: "Fist item",
          task_id: 106056736787116130
        },
        {
          listId: 1036028926122.7329,
          text: "Another item",
          task_id: 10567367623116130
        },
        {
          listId: 1162410477426.691,
          text: "Oh look Another item",
          task_id: 117276831315291730
        },
        {
          listId: 1162410477426.691,
          text: "Another item on another list",
          task_id: 83465640794226190
        }
      ]
    };
    this.addList = this.addList.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addList(title, id) {
    const lists = this.state.lists.concat({ title, id });
    this.setState({
      lists: lists
    });
  }

  addNewTask(listId, text) {
    const task_id = Math.floor(Math.random() * 100000 * Date.now());
    if (text.length > 0) {
      const todos = this.state.todos.concat({ listId, text, task_id });
      this.setState({ todos });
    }
  }

  removeTask(id) {
    const todos = this.state.todos.filter(({ task_id }) => task_id !== id);
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to Custom Trello Board</h2>
        <div className="columns">
          {this.state.lists.map((list, i) => {
            return (
              <TodoList
                key={i}
                addNewTask={this.addNewTask}
                removeTask={this.removeTask}
                id={list.id}
                title={list.title}
                todos={this.state.todos.filter(
                  ({ listId }) => listId === list.id
                )}
              />
            );
          })}
          <AddList addList={this.addList} className="column" />
        </div>
      </div>
    );
  }
}

export default App;
