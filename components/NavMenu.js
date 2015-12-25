import React from 'react';

export const NavMenu = ({
  items,
  labels,
}) => {
  const len = items.length;
  return <ul>
    {items.map((item, i) => {
      return <li key={i}>
        <a href="#" onClick={item.onClick}>
          {item.name}
          <span className={item.childClassName}>
            ({item.children})
          </span>
        </a>
      </li>
    })}
    <li className="pure-menu-heading">Labels</li>
    {labels.map((label, i) => {
      return <li key={len+i}>
        <a href="#"><span className={label.className}></span>{label.name}</a>
      </li>
      })}
  </ul>
};
