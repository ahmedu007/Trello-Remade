import React from "react";
import TaskCard from "./TaskCard";

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

  render() {
    const { todos, title } = this.props;
    return (
      <div className="column">
        <h3>{title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add an item"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add task" />
        </form>
        <ul>
          {todos.map((tasks, i) => {
            return <TaskCard task={tasks.text} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
