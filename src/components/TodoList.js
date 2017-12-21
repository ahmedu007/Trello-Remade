import React from "react";
import TaskCard from "./TaskCard";
import Dragula from "react-dragula";

import "./TodoList.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const text = event.target.value;
    this.setState({
      text
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewTask(this.props.id, this.state.text);
    this.setState({
      text: ""
    });
  }

  deleteTodo() {}

  dragulaDecorator = componentBackingInstance => {
    if (componentBackingInstance) {
      let options = {};
      Dragula([componentBackingInstance], options);
    }
  };

  render() {
    const { todos, title } = this.props;
    return (
      <div className="column">
        <h3>{title}</h3>
        <div className="content">
          <ul ref={this.dragulaDecorator}>
            {todos.map((tasks, i) => {
              return (
                <TaskCard
                  key={i}
                  task={tasks.text}
                  task_id={tasks.task_id}
                  removeTask={this.props.removeTask}
                />
              );
            })}
          </ul>
        </div>
        <form className="container-2" onSubmit={this.handleSubmit}>
          <span className="icon">
            <i className="fa fa-plus fa-2x" />
          </span>
          <input
            type="text"
            id="search"
            placeholder="Add a task"
            value={this.state.text}
            onChange={this.handleChange}
          />
          {/* <input type="submit" value="Add task" /> */}
        </form>
      </div>
    );
  }
}

export default TodoList;
