import React from 'react';
import Nav from '../containers/Nav';
import EmailList from '../containers/EmailList';
import Reader from '../containers/Reader';
import ComposeModal from '../containers/ComposeModal';
import ReplyModal from '../containers/ReplyModal';
import ForwardModal from '../containers/ForwardModal';

export const App = () => {
  return <div className="pure-g-r content id-layout">
    <Nav />
    <EmailList />
    <Reader />
    <ComposeModal />
    <ReplyModal />
    <ForwardModal />
  </div>
};
