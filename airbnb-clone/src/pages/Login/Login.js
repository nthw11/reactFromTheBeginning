import React, { Component } from 'react';
import './Login.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import openModal from '../../actions/openModal';
import SignUp from './SignUp';
import axios from 'axios';
import regAction from '../../actions/regAction';
import swal from 'sweetalert';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  changeEmail = (e) => this.setState({ email: e.target.value });
  changePassword = (e) => this.setState({ password: e.target.value });

  submitLogin = async (e) => {
    e.preventDefault();
    // console.log(this.state.email);
    // console.log(this.state.password);
    const url = `${window.apiHost}/users/login`;
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    const resp = await axios.post(url, data);
    // const token = resp.data.token;
    if (resp.data.msg === 'badPass') {
      swal({
        title: 'Incorrect Password',
        text: 'The password you entered is incorrect. Please try again.',
        icon: 'error',
      });
    } else if (resp.data.msg === 'noEmail') {
      swal({
        title: 'Invalid email',
        text:
          'The email you entered has not been registered. Please re-enter your email addres or register as a new user.',
        icon: 'error',
      });
    } else if (resp.data.msg === 'loggedIn') {
      swal({
        title: 'Success!',
        icon: 'success',
      });
      this.props.regAction(resp.data);
    }
  };

  render() {
    return (
      <div className='login-form'>
        <form onSubmit={this.submitLogin}>
          <button className='facebook-login'>Connect With Facebook</button>
          <button className='google-login'>Connect With Google</button>
          <div className='login-or center'>
            <span>or</span>
            <div className='or-divider'></div>
          </div>
          <input
            type='text'
            className='browser-default'
            placeholder='Email address'
            onChange={this.changeEmail}
          />
          <input
            type='password'
            className='browser-default'
            placeholder='Password'
            onChange={this.changePassword}
          />
          <button className='sign-up-button'>Login</button>
          <div className='divider'></div>
          <div>
            Don't have an account?{' '}
            <span
              className='pointer'
              onClick={() => {
                this.props.openModal('open', <SignUp />);
              }}
            >
              {' '}
              Sign up
            </span>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatcher) {
  return bindActionCreators(
    {
      openModal: openModal,
      regAction: regAction,
    },
    dispatcher
  );
}

export default connect(null, mapDispatchToProps)(Login);
