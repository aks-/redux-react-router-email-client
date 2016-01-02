import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actionCreators';

const mapDispatchToProps = (dispatch) => {
  return {
    onLogIn: (email) => {
      dispatch(
        login(email)
      );
    }
  };
};

const Login = ({
  onLogIn
}) => {
  let selectedEmail;
  const divStyle = {
    width: 100,
    height: 100,
    backgroundColor: '#e3e3e',
    position: 'absolute',
    top:0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto'
  };
  return (
    <div style={divStyle}>
      <select ref={node => {
        selectedEmail=node
      }}>
        <option value="ashok@snake-eyes.com">ashok@snake-eyes.com</option>
        <option value="aria@snake-eyes.com">aria@snake-eyes.com</option>
        <option value="fishrock123@snake-eyes.com">fishrock123@snake-eyes.com</option>
        <option value="dan@snake-eyes.com">dan@snake-eyes.com</option>
        <option value="pete@snake-eyes.com">pete@snake-eyes.com</option>
      </select>
      <button onClick={(e) => {
        e.preventDefault();
        const email = selectedEmail.value;
        onLogIn(email);      
      }}>Log In</button>
  </div>
  );
};

export default connect(null, mapDispatchToProps)(Login);
