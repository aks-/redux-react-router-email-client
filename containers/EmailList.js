import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EmailItem } from '../components/EmailItem';
import { selectEmailToRead } from '../actionCreators';

const mapStateToProps = (state) => {
  const selectedBox = state.selectedBox;
  const emails = state.emails.get(selectedBox);
  const selected = state.selectedEmailIndex;

  return {
    emails,
    selected
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEmailItemClick: (index) => {
      dispatch(
        selectEmailToRead(index)
      );
    }
  };
};

const EmailList = ({
  emails,
  selected,
  onEmailItemClick
}) => (
  <div className="pure-u id-list"> 
    <div className="content">
      {emails ? emails.map((email, i) => {
        return <EmailItem
          onClick={() => {
            onEmailItemClick(i);
          }}
          key={i}
          selected={selected === i}
          name={
            email.
              getIn([
                'message',
                'from',
                'name'])
          }
          unread={false}
          subject={
            email.
              getIn([
                'message',
                'subject'])
          }>
          {
            email.
              getIn([
                'message',
                'text'])
          }
        </EmailItem>
        }) : ''}
    </div>
  </div> 
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailList);

