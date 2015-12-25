import React, { Component } from 'react';
import { Modal } from '../components/shared/Modal';
import { sendReply } from '../actionCreators';

export class ReplyModal extends Component {

  componentDidMount () {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {
    const { store } = this.context;
    const refs = {};
    const { emails, selectedBox, selectedEmailIndex } = store.getState();
    const selectedEmails = emails.get(selectedBox).toArray();
    const selectedEmail = selectedEmails[selectedEmailIndex];
    return <Modal
      idName="reply-email-content"
      elements={[{
        label: '',
        ref: node => {
          refs['text'] = node;
        },
        id: 'compose-email-body',
        placeholder: ''
      }]}
      onButtonClick={e => {
        e.preventDefault();
        const text = refs.text.value;
        const email = selectedEmail.getIn([
          'message',
          'headers',
          'Reply-To'
        ]);
        const subject = selectedEmail.getIn([
          'message',
          'subject'
        ]);
        const thread_id = selectedEmail.get('thread_id');
        store.dispatch(
          sendReply(
            email,
            text,
            subject,
            thread_id
          ));
          replyPanel.hide();
      }}
      buttonName="Send Reply"
    />
  }
}
ReplyModal.contextTypes = {
  store: React.PropTypes.object
};
