import React from 'react'
import BeautifulDND from './BeautifulDND'
import enhanceWithClickOutside from 'react-click-outside'

import List, { ListItem, ListItemText } from 'material-ui/List'
import { withStyles } from 'material-ui/styles'
import { Paper, Input } from 'material-ui/'

import SimpleMenu from './OptionsMenu'
import './TodoList.css'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      isEditing: false,
      menu: false,
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.editListTitle = this.editListTitle.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleTitleSubmit = this.handleTitleSubmit.bind(this)
  }

  handleClickOutside() {
    this.setState({
      isEditing: false,
      menu: false
    })
  }

  handleChange(event) {
    event.preventDefault()
    const text = event.target.value
    this.setState({
      text
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addNewTask(this.props.id, this.state.text)
    this.setState({
      text: ''
    })
  }

  editListTitle() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleTitleChange(event) {
    event.preventDefault()
    this.setState({
      title: event.target.value
    })
  }

  handleTitleSubmit(event) {
    event.preventDefault()
    this.props.editTitle(this.props.index, this.props.title, this.state.title)
    this.setState({
      isEditing: !this.state.isEditing,
      title: ''
    })
  }

  render() {
    const { todos, title } = this.props
    return (
      <div className='column is-one-third' id='list'>
        <Paper>
          {this.state.isEditing
            ? <form onSubmit={this.handleTitleSubmit}>
              <div className='box'>
                <Input
                  label='Task'
                  inputProps={{
                    'aria-label': 'Description'
                  }}
                  type='text'
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                  placeholder={this.props.title}
                />
              </div>
            </form>
            : <ListItem>
              <ListItemText primary={title} />
              <SimpleMenu
                editListTitle={this.editListTitle}
                removeList={this.props.removeList}
                removeAllTasksFromList={() =>
                  this.props.removeAllTasksFromList(this.props.id)}
              />
            </ListItem>}

          <div className='content'>
            <List style={{ marginLeft: '-30px', maxWidth: '125%' }}>
              <BeautifulDND task={todos} removeTask={this.props.removeTask} />
            </List>
          </div>
        </Paper>
        <br />
        <Paper>
          <br />
          <form onSubmit={this.handleSubmit} style={{ marginLeft: '4%' }}>
            <Input
              label='Task'
              placeholder='Add a task'
              inputProps={{
                'aria-label': 'Description'
              }}
              value={this.state.text}
              onChange={this.handleChange}
            />
          </form>
          <br />
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(enhanceWithClickOutside(TodoList))
