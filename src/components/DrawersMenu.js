import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import Button from "material-ui/Button";
import List from "material-ui/List";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

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
        <List>Something</List>
        <Divider />
        <List>otherMailFolderListItems</List>
      </div>
    );

    const fullList = (
      <div className={classes.listFull}>
        <List>Something</List>
        <Divider />
        <List>otherMailFolderListItems</List>
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
