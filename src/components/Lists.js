import React from "react";

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default Lists;
