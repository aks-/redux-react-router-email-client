import React, { Component } from 'react';
import { Main } from '../components/Main';

export class Reader extends Component {
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
    const { selectedBox, emails, selectedEmailIndex } = store.getState();
    const selectedEmail = emails.get(selectedBox).
      toArray()[selectedEmailIndex];
    const name = selectedEmail.get([
      'message',
      'from',
      'name'
    ]);
    const subject = selectedEmail.getIn([
      'message',
      'subject'
    ]); 
    const timestamp = selectedEmail.getIn([
      'message',
      'timestamp'
    ]);
    const html = selectedEmail.getIn([
      'message',
      'html'
    ]);

    return <Main
      name={name}
      subject={subject}
      timestamp={timestamp}
      html={html}
    />
  }
}
Reader.contextTypes = {
  store: React.PropTypes.object
};
