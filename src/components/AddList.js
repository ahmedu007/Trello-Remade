import React from 'react'
import shortid from 'shortid'
import Save from 'material-ui-icons/Save'
import { Paper, Button, TextField } from 'material-ui/'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
})

class AddList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const id = shortid.generate()
    const title = this.state.title
    this.props.addList(title, id)
    this.setState({
      title: ''
    })
  }

  handleChange(event) {
    event.preventDefault()
    const title = event.target.value
    this.setState({
      title
    })
  }

  render() {
    const { classes } = this.props

    return (
      <div className='column' id='list'>
        <Paper>
          <form
            onSubmit={this.handleSubmit}
            className={classes.container}
            autoComplete='off'
          >
            <TextField
              id='with-placeholder'
              required
              label='Add a new List'
              placeholder='Title'
              className={classes.textField}
              margin='normal'
              onChange={this.handleChange}
              value={this.state.title}
            />
            <Button className={classes.button} raised type='submit'>
              <Save className={classes.leftIcon} />
              Save
            </Button>
          </form>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(AddList)
