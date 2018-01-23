import React, { Component } from "react";

class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <div className="box">
          <div className="columns">
            {[1, 2, 3].map((box, i) => (
              <div className="column is-one-quarter" key={i}>
                <div className="box">Column {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Boards;
