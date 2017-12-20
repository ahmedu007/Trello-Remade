import React from "react";

class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = Date.now() * Math.random();
    const title = this.state.title;
    this.props.addList(title, id);
    this.setState({
      title: ""
    });
  }

  handleChange(event) {
    event.preventDefault();
    const title = event.target.value;
    this.setState({
      title
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddList;
