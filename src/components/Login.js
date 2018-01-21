import React, { Component } from 'react'
import './Login.css'
import Button from 'material-ui/Button'

class Login extends Component {
  render () {
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
                          className='input is-large'
                          type='email'
                          placeholder='Your Email'
                          autoFocus=''
                        />
                      </div>
                    </div>

                    <div className='field'>
                      <div className='control'>
                        <input
                          className='input is-large'
                          type='password'
                          placeholder='Your Password'
                        />
                      </div>
                    </div>
                    <div className='field'>
                      <label className='checkbox'>
                        <input type='checkbox' />
                        Remember me
                      </label>
                    </div>
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
