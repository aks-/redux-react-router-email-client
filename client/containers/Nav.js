import React from 'react';
import { connect } from 'react-redux';
import { NavMenu } from '../components/NavMenu';
import { fetchAndSelectBox } from '../actionCreators';

const mapStateToProps = (state) => {
  const { 
    unread,
    userInfo 
  } = state;
  const { email } = userInfo;
  return {
    unread,
    email
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBoxClick: (box, email) => {
      dispatch(
        fetchAndSelectBox(box, email)
      );
    }
  };
};

export const Nav = ({
  email,
  unread,
  onBoxClick
}) => {

  const items = [{
    name: 'Inbox',
    onClick: (e) => {
      e.preventDefault();
      onBoxClick('inbox', email); 
    },
    childClassName: 'email-count',
    children: unread
  }, {
    name: 'Important'
  }, {
    name: 'Sent',
    onClick: (e) => {
      e.preventDefault();
      onBoxClick('sent', email);
    }
  }, {
    name: 'Drafts'
  }, {
    name: 'Trash'
  }];
  const labels = [{
    name: 'Personal',
    className: 'email-label-personal'
  }, {
    name: 'Work',
    className: 'email-label-work'
  }, {
    name: 'Travel',
    className: 'email-label-travel'
  }];
  return <NavMenu
    items={items}
    labels={labels}
  /> 
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
