import React from "react";

import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import DeleteIcon from "material-ui-icons/Delete";

import Paper from "material-ui/Paper";

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
    <List dense={true}>
      <Paper style={{ maxHeight: "12%" }}>
        <ListItem button>
          <ListItemText primary={props.task} style={{ marginTop: "7%" }} />
          <ListItemIcon>
            <DeleteIcon onClick={handleClick} />
          </ListItemIcon>
        </ListItem>
      </Paper>
    </List>
  );
};

export default withStyles(styles)(TaskCard);
