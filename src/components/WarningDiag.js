import React from "react";
import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import Slide from "material-ui/transitions/Slide";
import NoSSR from "./helpers/NoSSR"; // Temporary workaround for SSR Portal issue.

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class WarningDiag extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} style={{ color: "red" }}>
          Delete List
        </Button>
        <NoSSR>
          <Dialog
            open={this.state.open}
            transition={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"Delete Entire List?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                You are about to Delete the List with all its contents. Are you
                sure you want to proceed? This action is irreversible.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.disagree} color="primary">
                Cancel
              </Button>
              <Button onClick={this.props.removeList} color="primary">
                Okay
              </Button>
            </DialogActions>
          </Dialog>
        </NoSSR>
      </div>
    );
  }
}

export default WarningDiag;
