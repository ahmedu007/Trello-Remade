import React, { Component } from "react";
import shortid from "shortid";

import TodoList from "./components/TodoList";
import AddList from "./components/AddList";

import ButtonAppBar from "./components/AppBar";
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
    this.removeList = this.removeList.bind(this);
    this.editTitle = this.editTitle.bind(this);
  }

  addList(title, id) {
    const lists = this.state.lists.concat({ title, id });
    this.setState({
      lists: lists
    });
  }

  addNewTask(listId, text) {
    const task_id = shortid.generate();
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

  removeList(i) {
    const prevLists = this.state.lists.slice();
    const firstHalf = prevLists.slice(0, i);
    const secHalf = prevLists.slice(i + 1);
    this.setState({
      lists: firstHalf.concat(secHalf)
    });
  }

  editTitle(i, oldTitle, newTitle) {
    const lists = this.state.lists.slice();
    lists[i].title = newTitle;
    this.setState({
      lists
    });
  }

  render() {
    return (
      <div>
        <ButtonAppBar />
        <br />
        <br />
        <div className="columns">
          {this.state.lists.map((list, i) => {
            return (
              <TodoList
                key={i}
                index={i}
                addNewTask={this.addNewTask}
                removeTask={this.removeTask}
                removeList={() => {
                  this.removeList(i);
                }}
                editTitle={this.editTitle}
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
