import React from "react";
import Menu, { MenuItem } from "material-ui/Menu";
import { ListItemIcon } from "material-ui/List";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui-icons/MoreVert";

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <ListItemIcon>
          <IconButton
            aria-owns={this.state.open ? "simple-menu" : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            style={{ marginRight: "1%" }}
          >
            <MoreVertIcon />
          </IconButton>
        </ListItemIcon>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.props.editListTitle}>Edit Title</MenuItem>
          <MenuItem
            style={{ color: "red" }}
            onClick={() => {
              this.props.removeList();
              this.setState({ open: false });
            }}
          >
            Delete List
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            Archive all cards in the List
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
