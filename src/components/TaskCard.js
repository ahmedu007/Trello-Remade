import React from "react";

import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import DeleteIcon from "material-ui-icons/Delete";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    background: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
});

const TaskCard = props => {
  const handleClick = event => {
    props.removeTask(props.task_id);
  };
  return (
    // <li
    //   style={{
    //     border: "1px dashed gray",
    //     padding: "0.5rem 1rem",
    //     marginBottom: ".5rem",
    //     backgroundColor: "white"
    //   }}
    // >
    //   {props.task}
    //   <a style={{ color: "maroon" }} onClick={handleClick}>
    //     <span className="icon is-small is-right">
    //       <i className="fa fa-times" />
    //     </span>
    //   </a>
    // </li>
    <List dense={true}>
      <ListItem button>
        <ListItemText primary={props.task} style={{ marginTop: "7%" }} />
        <ListItemIcon>
          <DeleteIcon onClick={handleClick} />
        </ListItemIcon>
      </ListItem>
      <Divider />
    </List>
  );
};

export default withStyles(styles)(TaskCard);
