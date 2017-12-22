import React from "react";
import TaskCard from "./TaskCard";
import Dragula from "react-dragula";
import enhanceWithClickOutside from "react-click-outside";

import "./TodoList.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      isEditing: false,
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editListTitle = this.editListTitle.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTitleSubmit = this.handleTitleSubmit.bind(this);
  }

  handleClickOutside() {
    this.setState({
      isEditing: false
    });
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

  dragulaDecorator = componentBackingInstance => {
    if (componentBackingInstance) {
      let options = {};
      Dragula([componentBackingInstance], options);
    }
  };

  editListTitle() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  handleTitleChange(event) {
    event.preventDefault();
    this.setState({
      title: event.target.value
    });
  }

  handleTitleSubmit(event) {
    event.preventDefault();
    this.props.editTitle(this.props.index, this.props.title, this.state.title);
    this.setState({
      isEditing: !this.state.isEditing,
      title: ""
    });
  }

  render() {
    const { todos, title } = this.props;
    return (
      <div className="column">
        {this.state.isEditing ? (
          <form onSubmit={this.handleTitleSubmit}>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
              placeholder={this.props.title}
            />
          </form>
        ) : (
          <span>
            <span className="title is-5">{title}</span>
            <a style={{ color: "black" }} onClick={this.editListTitle}>
              <i className="fa fa-pencil" />
            </a>
            <button className="delete" onClick={this.props.removeList} />
          </span>
        )}

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

export default enhanceWithClickOutside(TodoList);
