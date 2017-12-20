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
    const title = this.state.title;
    this.props.addList(title);
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
          onChange={this.handleChange}
          value={this.state.title}
        />
        <input type="submit" value="Button" />
      </form>
    );
  }
}

export default AddList;
