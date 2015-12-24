import React from 'react';

export const Nav = ({
  unread,
  onClick
}) => (
  <div className="pure-u id-nav">
    <a href="#nav" className="nav-menu-button">Menu</a>

    <div className="nav-inner">
      <button id="compose-button" className="pure-button primary-button" href="#">Compose</button>

      <div className="pure-menu pure-menu-open">
        <ul>
          <li><a onClick={e => {
            e.preventDefault();
            onClick('inbox')
          }} href="#">Inbox <span className="email-count">({unread})</span></a></li>
          <li><a href="#">Important</a></li>
          <li><a onClick={e => {
            e.preventDefault();
            onClick('sent');
          }} href="#">Sent</a></li>
          <li><a href="#">Drafts</a></li>
          <li><a href="#">Trash</a></li>
          <li className="pure-menu-heading">Labels</li>
          <li><a href="#"><span className="email-label-personal"></span>Personal</a></li>
          <li><a href="#"><span className="email-label-work"></span>Work</a></li>
          <li><a href="#"><span className="email-label-travel"></span>Travel</a></li>
        </ul>
      </div>
    </div>
  </div>
);

