import React from 'react';

export const NavMenu = ({
  items,
  labels,
}) => {
  const len = items.length;
  return <div className="pure-u id-nav">
    <a href="#nav" className="nav-menu-button">Menu</a>
    <div className="nav-inner">
      <button id="compose-button" className="pure-button primary-button" href="#">Compose</button>
      <div className="pure-menu pure-menu-open">
        <ul>
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
          </div>
        </div>
      </div>;
};
