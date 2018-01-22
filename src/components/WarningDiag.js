import React from 'react'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'
import NoSSR from './helpers/NoSSR'

function Transition(props) {
  return <Slide direction='up' {...props} />
}

class WarningDiag extends React.Component {
  render() {
    return (
      <div>
        <NoSSR>
          <Dialog
            open={this.props.open}
            transition={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby='alert-dialog-slide-title'
            aria-describedby='alert-dialog-slide-description'
          >
            <DialogTitle id='alert-dialog-slide-title'>
              {this.props.messages.title}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-slide-description'>
                {this.props.messages.body}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.disagree} color='primary'>
                Cancel
              </Button>
              <Button onClick={this.props.removeList} color='primary'>
                Okay
              </Button>
            </DialogActions>
          </Dialog>
        </NoSSR>
      </div>
    )
  }
}

export default WarningDiag
