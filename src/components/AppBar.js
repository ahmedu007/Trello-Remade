import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { AppBar, Toolbar, Button, Typography } from 'material-ui/'
import DrawersMenu from './DrawersMenu'
import { NavLink } from 'react-router-dom'

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

function ButtonAppBar(props) {
  const { classes } = props
  return (
    <AppBar style={{ textAlign: 'center' }}>
      <Toolbar>
        <DrawersMenu />
        <Typography
          type='title'
          color='inherit'
          className={classes.flex}
          style={{ fontFamily: 'Ubuntu' }}
        >
          Welcome to Custom Trello Board
        </Typography>
        <NavLink to='/login'>
          <Button color='contrast'>
            Login
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
