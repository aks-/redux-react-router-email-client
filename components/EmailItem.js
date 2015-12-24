import React from 'react';

export const EmailItem = ({
  name,
  unread,
  subject,
  children,
  onClick,
  selected
}) => {
  let classes = 'email-item pure-g';
  if (selected)
    classes += ' email-item-selected';
  if (unread)
    classes += ' email-item-unread';
  return (
    <div className={classes} onClick={() =>
      {
        onClick();
      }}>
      <div className="pure-u">
        <img className="email-avatar" alt={name + '\'s avatar'} src="https://avatars3.githubusercontent.com/u/8316625?v=3&s=460" height="65" width="65"/>
      </div>
      <div className="pure-u-3-4">
        <h5 className="email-name">{name}</h5>
        <h4 className="email-subject">{subject}</h4>
        <p className="email-desc">
          {children}
        </p>
      </div>
    </div>
  );
};
