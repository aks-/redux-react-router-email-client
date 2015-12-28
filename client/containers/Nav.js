import React from 'react';
import { connect } from 'react-redux';
import { NavMenu } from '../components/NavMenu';
import { fetchAndSelectBox } from '../actionCreators';

const mapStateToProps = (state) => {
  const { unread } = state;
  return {
    unread
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBoxClick: (box) => {
      dispatch(
        fetchAndSelectBox(box)
      );
    }
  };
};

export const Nav = (props) => {

  const { unread, onBoxClick } = props;

  const items = [{
    name: 'Inbox',
    onClick: (e) => {
      e.preventDefault();
      onBoxClick('inbox'); 
    },
    childClassName: 'email-count',
    children: unread
  }, {
    name: 'Important'
  }, {
    name: 'Sent',
    onClick: (e) => {
      e.preventDefault();
      onBoxClick('sent');
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
