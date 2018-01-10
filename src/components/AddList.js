import React from "react";
import shortid from "shortid";
import Icon from "material-ui/Icon";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
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
});

class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = shortid.generate();
    const title = this.state.title;
    this.props.addList(title, id);
    this.setState({
      title: ""
    });
  }

  handleChange(event) {
    event.preventDefault();
    const title = event.target.value;
    this.setState({
      title
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper style={{ maxWidth: "25%", marginTop: "0.8%", height: "10%" }}>
        <div className="column">
          <form
            onSubmit={this.handleSubmit}
            className={classes.container}
            autoComplete="off"
          >
            <TextField
              id="with-placeholder"
              required
              label="Add a new List"
              placeholder="Title"
              className={classes.textField}
              margin="normal"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <Button
              className={classes.button}
              raised
              color="primary"
              type="submit"
            >
              Send
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </form>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(AddList);
