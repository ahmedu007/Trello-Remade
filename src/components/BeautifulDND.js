import React, { Component } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import DeleteIcon from 'material-ui-icons/Delete'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const grid = 8
const getItemStyle = (draggableStyle, isDragging) => ({
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  background: isDragging ? '#5DBCD2' : 'lightgrey',

  ...draggableStyle
})
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'grey' : 'lightgrey',
  padding: grid,
  width: 'auto',
  marginLeft: 28
})

class BeautifulDND extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: this.props.task
    }
    this.onDragEnd = this.onDragEnd.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.setState({
      items: this.props.task
    })
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.task.length !== nextProps.task.length) {
      this.setState({ items: nextProps.task })
    }
  }

  onDragEnd (result) {
    if (!result.destination) {
      return
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    )

    this.setState({
      items
    })
  }

  handleClick = event => {
    this.props.removeTask(this.props.task.task_id)
  }

  render () {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable
                  key={item.task_id}
                  draggableId={item.task_id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          provided.draggableProps.style,
                          snapshot.isDragging
                        )}
                      >
                        <ListItem
                          button
                          style={{ fontSize: '0.70em', maxHeight: '10px' }}
                        >
                          <ListItemText
                            primary={item.text}
                            style={{ marginTop: '7%' }}
                          />
                          <ListItemIcon>
                            <DeleteIcon
                              onClick={() => {
                                this.props.removeTask(item.task_id)
                              }}
                            />
                          </ListItemIcon>
                        </ListItem>
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
    )
  }
}

export default BeautifulDND
