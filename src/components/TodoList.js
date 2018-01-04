import React from "react";
import TaskCard from "./TaskCard";
import Dragula from "react-dragula";
import enhanceWithClickOutside from "react-click-outside";

import { ListItem, ListItemText } from "material-ui/List";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";

import SimpleMenu from "./OptionsMenu";

import "./TodoList.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      isEditing: false,
      menu: false,
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
      isEditing: false,
      menu: false
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
        <Paper>
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
            <ListItem>
              <ListItemText primary={title} />
              <SimpleMenu
                editListTitle={this.editListTitle}
                removeList={this.props.removeList}
              />
            </ListItem>
          )}

          <div className="content">
            <ul
              ref={this.dragulaDecorator}
              style={{ marginLeft: "-30px", maxWidth: "125%" }}
            >
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
            <span className="icon" style={{ marginLeft: "5%" }}>
              <i className="fa fa-plus fa-2x" />
            </span>
            <input
              type="text"
              id="search"
              placeholder="Add a task"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(enhanceWithClickOutside(TodoList));
