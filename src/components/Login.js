import React, { Component } from 'react'
import './Login.css'
import { Button, Checkbox, Paper } from 'material-ui/'
import { ListItem, ListItemText } from 'material-ui/List'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      checked: false
    }
  }
  render() {
    return (
      <div className='background'>
        <div className='container' style={{ marginTop: '3%' }}>
          <div
            className='box'
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              marginTop: '3%',
              textAlign: 'center'
            }}
          >

            <div className='hero-body'>
              <div className='column is-4 is-offset-4'>
                <h3 className='title has-text-white'>Login</h3>
                <p className='subtitle has-text-white'>
                  Please login to proceed.
                </p>
                <div
                  className='box'
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <form>
                    <div className='field'>
                      <div className='control'>
                        <input
                          className='input '
                          type='email'
                          placeholder='Your Email'
                          autoFocus=''
                          style={{ height: '50px' }}
                        />
                      </div>
                    </div>

                    <div className='field'>
                      <div className='control'>
                        <input
                          className='input'
                          type='password'
                          placeholder='Your Password'
                          style={{ height: '50px' }}
                        />
                      </div>
                    </div>
                    <Paper>
                      <ListItem
                        dense
                        button
                        onClick={() => {
                          this.setState({ checked: !this.state.checked })
                        }}
                        style={{ height: '50px' }}
                      >
                        <Checkbox
                          checked={this.state.checked}
                          tabIndex={-1}
                          disableRipple
                          onClick={() => {
                            this.setState({ checked: !this.state.checked })
                          }}
                        />
                        <ListItemText
                          primary='Remember me'
                          style={{ textAlign: 'left' }}
                        />
                      </ListItem>
                    </Paper>
                    <br />
                    <Button
                      raised
                      color='primary'
                      style={{ width: '100%', height: '60px' }}
                    >
                      Sign In
                    </Button>
                  </form>
                </div>
                <p className='has-text-grey'>
                  <a href='../'>Sign Up</a> &nbsp;·&nbsp;
                  <a href='../'>Forgot Password</a> &nbsp;·&nbsp;
                  <a href='../'>Need Help?</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Login
