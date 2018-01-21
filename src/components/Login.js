import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
  render () {
    return (
      <div className='background'>
        <div className='container'>
          <div
            className='box'
            style={{ background: 'rgba(0, 0, 0, 0.5)', height: '90vh' }}
          >
            <input type='text' />
          </div>
        </div>
      </div>
    )
  }
}

export default Login
