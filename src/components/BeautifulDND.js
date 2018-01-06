import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import DeleteIcon from "material-ui-icons/Delete";

import Paper from "material-ui/Paper";

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    task_id: `item-${k}`,
    text: `item ${k}`,
    list_id: `itemList ${k}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// using some little inline style helpers to make the app look okay
const grid = 8;
const getItemStyle = (draggableStyle, isDragging) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: "auto",
  marginLeft: 28
});

class BeautifulDND extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.task
    };
    this.onDragEnd = this.onDragEnd.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     items: this.props.task
  //   });
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log("this", this.props.task.length);
  //   console.log("next", nextProps.task.length);
  //   if (this.props.task.length < nextProps.task.length) {
  //     this.setState({ items: nextProps.task });
  //   }
  // }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  handleClick = event => {
    this.props.removeTask(this.props.task.task_id);
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.props.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {/* {this.state.items.map(item => ( */}
              {this.props.task.map(item => (
                <Draggable key={item.task_id} draggableId={item.task_id}>
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        style={getItemStyle(
                          provided.draggableStyle,
                          snapshot.isDragging
                        )}
                        {...provided.dragHandleProps}
                      >
                        <ListItem
                          button
                          style={{ fontSize: "0.75em", maxHeight: "10px" }}
                        >
                          <ListItemText
                            primary={item.text}
                            style={{ marginTop: "7%" }}
                          />
                          <ListItemIcon>
                            <DeleteIcon
                              onClick={() => {
                                this.props.removeTask(item.task_id);
                              }}
                            />
                          </ListItemIcon>
                        </ListItem>
                        {/* {item.text} */}
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default BeautifulDND;
