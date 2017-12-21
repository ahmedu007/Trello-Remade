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
      <form onSubmit={this.handleSubmit} className="column">
        <div className="group">
          <input
            type="text"
            required
            onChange={this.handleChange}
            value={this.state.title}
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Add a List</label>
        </div>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddList;
