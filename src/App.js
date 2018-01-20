import React, { Component } from 'react'
import shortid from 'shortid'

import TodoList from './components/TodoList'
import AddList from './components/AddList'

import ButtonAppBar from './components/AppBar'
import SimpleSnackbar from './components/Snackbar'
import './App.css'

import fire from './fire'

class App extends Component {
  constructor () {
    super()
    this.state = {
      lists: [
        {
          id: 1036028926122.7329,
          title: 'List # 1'
        },
        {
          id: 1162410477426.691,
          title: 'List # 2'
        }
      ],
      todos: [
        {
          listId: 1036028926122.7329,
          text: 'Drag me down',
          task_id: 106056736787116130
        },
        {
          listId: 1036028926122.7329,
          text: 'Another item',
          task_id: 10567367623116130
        },
        {
          listId: 1162410477426.691,
          text: 'Oh look Another item',
          task_id: 117276831315291730
        },
        {
          listId: 1162410477426.691,
          text: 'I can be dragged too',
          task_id: 83465640794226190
        }
      ],
      snackbar: {
        open: false,
        message: ''
      }
    }
    this.addList = this.addList.bind(this)
    this.addNewTask = this.addNewTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.removeList = this.removeList.bind(this)
    this.editTitle = this.editTitle.bind(this)
    this.removeAllTasksFromList = this.removeAllTasksFromList.bind(this)
  }

  componentWillMount () {
    let messagesRef = fire
      .database()
      .ref('messages')
      .orderByKey()
      .limitToLast(100)

    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key }
      this.setState({ messages: [message].concat(this.state.messages) })
    })
  }

  addList (title, id) {
    const lists = this.state.lists.concat({ title, id })
    this.setState({
      lists: lists
    })
    fire.database().ref('lists').push({ title, id })
  }

  addNewTask (listId, text) {
    const task_id = shortid.generate()
    if (text.length > 0) {
      const todos = this.state.todos.concat({ listId, text, task_id })
      this.setState({ todos })
      fire.database().ref('todos').push({ listId, text, task_id })
    }
  }

  removeTask (id) {
    const todos = this.state.todos.filter(({ task_id }) => task_id !== id)
    this.setState({
      todos,
      snackbar: {
        open: true,
        message: 'Task successfully removed'
      }
    })
    fire.database().ref('todos').remove(({ task_id }) => task_id === id)
  }

  removeAllTasksFromList (id) {
    const todos = this.state.todos.filter(({ listId }) => listId !== id)
    this.setState({
      todos,
      snackbar: {
        open: true,
        message: 'All tasks removed'
      }
    })
  }

  removeList (i) {
    const prevLists = this.state.lists.slice()
    const firstHalf = prevLists.slice(0, i)
    const secHalf = prevLists.slice(i + 1)
    this.setState({
      lists: firstHalf.concat(secHalf),
      snackbar: {
        open: true,
        message: 'List was deleted'
      }
    })
  }

  editTitle (i, oldTitle, newTitle) {
    const lists = this.state.lists.slice()
    lists[i].title = newTitle
    this.setState({
      lists
    })
  }

  toggleSnackbar = () => {
    this.setState({ snackbar: { open: !this.state.snackbar.open } })
  }

  snackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ snackbar: false })
  }

  render () {
    return (
      <div style={{ paddingRight: '19px' }}>
        <ButtonAppBar />
        <div className='container' style={{ paddingRight: 'auto' }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className='columns'>
            {this.state.lists.map((list, i) => {
              return (
                <TodoList
                  key={i}
                  index={i}
                  addNewTask={this.addNewTask}
                  removeTask={this.removeTask}
                  removeList={() => {
                    this.removeList(i)
                  }}
                  removeAllTasksFromList={this.removeAllTasksFromList}
                  editTitle={this.editTitle}
                  id={list.id}
                  title={list.title}
                  todos={this.state.todos.filter(
                    ({ listId }) => listId === list.id
                  )}
                />
              )
            })}
            <SimpleSnackbar
              open={this.state.snackbar.open}
              handleClick={() => this.toggleSnackbar()}
              handleClose={this.snackbarClose}
              message={this.state.snackbar.message}
            />
            <AddList addList={this.addList} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
