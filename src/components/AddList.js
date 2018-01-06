import React from "react";
import shortid from "shortid";

import Paper from "material-ui/Paper";

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
    const id = shortid.generate();
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
      <Paper style={{ maxWidth: "25%", marginTop: "0.8%", height: "10%" }}>
        <div className="column">
          <form onSubmit={this.handleSubmit}>
            <div className="group" style={{ marginTop: "4%" }}>
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
        </div>
      </Paper>
    );
  }
}

export default AddList;
