import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import { Divider, IconButton, Drawer } from "material-ui/";
import MenuIcon from "material-ui-icons/Menu";
import InboxIcon from "material-ui-icons/Inbox";
import DraftsIcon from "material-ui-icons/Drafts";
import Repeat from "material-ui-icons/Repeat";
import { NavLink } from 'react-router-dom'



const styles = {
  list: {
    width: 250
  },
  listFull: {
    width: "auto"
  }
};

class DrawersMenu extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List style={{ textAlign: 'center' }}><strong>Recent Boards</strong></List>
        <List>
          <NavLink to='/'>
            <ListItem button>
              <ListItemIcon>
                <Repeat />
              </ListItemIcon>
              <ListItemText primary="My Board" />
            </ListItem>
          </NavLink>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Checklist for groceries" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Projects to finsh" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="contrast"
          aria-label="Menu"
          onClick={this.toggleDrawer("left", true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

DrawersMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrawersMenu);
