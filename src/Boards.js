import React, { Component } from "react";
import shortid from "shortid";
import { NavLink } from "react-router-dom";
import "./Board.css";

class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      newTitle: ""
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
                <div className="box" id="board_card">
                  Welcome Board
                </div>
              </NavLink>
            </div>
            {this.state.boards.map((board, i) => (
              <div className="column is-one-quarter" key={i}>
                <div className="box" id="board_card">
                  {board.title}
                </div>
              </div>
            ))}
            <div className="column is-one-quarter">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                  type="text"
                  placeholder="Create new board"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.newTitle}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Boards;
