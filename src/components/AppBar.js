import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import DrawersMenu from './DrawersMenu'

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

function ButtonAppBar (props) {
  const { classes } = props
  return (
    <AppBar style={{ textAlign: 'center' }}>
      <Toolbar>
        <DrawersMenu />
        <Typography type='title' color='inherit' className={classes.flex}>
          Welcome to Custom Trello Board
        </Typography>
        <Button color='contrast'>Login</Button>
      </Toolbar>
    </AppBar>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
