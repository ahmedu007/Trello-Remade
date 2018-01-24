import React, { Component } from "react";
import shortid from "shortid";
import { NavLink } from "react-router-dom";
import { TextField } from "material-ui/";
import { Grow } from "material-ui/transitions/";
import "./Board.css";

class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      newTitle: "",
      open: false
    };
  }

  addNewBoard(title) {
    let boards = this.state.boards.concat({
      board_id: shortid.generate(),
      title
    });
    this.setState({
      boards
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addNewBoard(this.state.newTitle);
    this.setState({
      newTitle: ""
    });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ newTitle: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <div className="box">
          <div className="columns" style={{ textAlign: "center" }}>
            <div className="column is-one-quarter">
              <NavLink to="/app">
                <div className="box" id="board_card" style={{ height: "100%" }}>
                  Welcome Board
                </div>
              </NavLink>
            </div>
            {this.state.boards.map((board, i) => (
              <Grow in timeout={{ enter: 3000 }} key={i}>
                <div className="column is-one-quarter">
                  <div
                    className="box"
                    id="board_card"
                    style={{ height: "100%" }}
                  >
                    {board.title}
                  </div>
                </div>
              </Grow>
            ))}
            <div className="column is-one-quarter">
              <div
                className="box"
                onClick={() => this.setState({ open: true })}
              >
                {/* Create a new board */}
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <TextField
                    id="with-placeholder"
                    required
                    label="Create new board"
                    placeholder="Title"
                    margin="none"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.newTitle}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Boards;
