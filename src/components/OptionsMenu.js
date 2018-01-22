import React from 'react'
import Menu, { MenuItem } from 'material-ui/Menu'
import { ListItemIcon } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import WarningDiag from './WarningDiag'

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    warning: false,
    messages: {
      title: '',
      body: ''
    }
  }

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ open: false, warning: false })
  }

  handleDeleteList = () => {
    this.props.removeList()
    this.setState({ open: false })
  }

  handleDeleteTasks = () => {
    this.props.removeAllTasksFromList()
    this.setState({ open: false })
  }

  render() {
    return (
      <div>
        <ListItemIcon>
          <IconButton
            aria-owns={this.state.open ? 'simple-menu' : null}
            aria-haspopup='true'
            onClick={this.handleClick}
            style={{ marginRight: '1%' }}
          >
            <MoreVertIcon />
          </IconButton>
        </ListItemIcon>
        <Menu
          id='simple-menu'
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.props.editListTitle}>Edit Title</MenuItem>
          <MenuItem
            onClick={() => this.setState({
              warning: !this.state.warning, messages: {
                title: 'Delete Entire List?',
                body: 'You are about to Delete the List with all its contents. Are you sure you want to proceed? This action is irreversible.'
              }
            })}
            style={{ color: 'red' }}
          >
            Delete List
            <WarningDiag
              open={this.state.warning}
              removeList={this.handleDeleteList}
              disagree={this.handleClose}
              messages={this.state.messages}

            />
          </MenuItem>
          <MenuItem
            onClick={() => this.setState({
              warning: !this.state.warning, messages: {
                title: 'Remove all tasks?',
                body: 'You are about to remove all the contents of this list. Are you sure you want to proceed? This action is irreversible.'
              }
            })}
          >
            Remove all cards from the List
            <WarningDiag
              open={this.state.warning}
              removeList={this.handleDeleteTasks}
              disagree={this.handleClose}
              messages={this.state.messages}

            />
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default SimpleMenu
