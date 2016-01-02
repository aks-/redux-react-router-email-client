import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EmailItem } from '../components/EmailItem';
import { selectEmailToRead } from '../actionCreators';

const mapStateToProps = (state) => {
  const selectedBox = state.selectedBox;
  const emails = state.emails.get(selectedBox);
  const selected = state.selectedEmailIndex;
  const { userInfo } = state;
  const { avatar } = userInfo;

  return {
    box: selectedBox,
    avatar,
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
  box,
  avatar,
  emails,
  selected,
  onEmailItemClick
}) => (
  <div className="pure-u id-list"> 
    <div className="content">
      {emails ? emails.map((email, i) => {
        
        const message = email.get('message');
        const subject = message.get('subject');
        const text = message.get('text');
        let avatar, name;

        if (box === 'inbox') {
          const from = message.get('from');
          avatar = from.get('avatar');
          name = from.get('name');
        } else {
          const to = message.get('to').toArray()[0];
          avatar = to.get('avatar');
          name = to.get('name');
        }

        return <EmailItem
          onClick={() => {
            onEmailItemClick(i);
          }}
          key={i}
          avatar={avatar}
          selected={selected === i}
          name={name}
          unread={false}
          subject={subject}>
          {text}
        </EmailItem>
        }) : ''}
    </div>
  </div> 
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailList);

