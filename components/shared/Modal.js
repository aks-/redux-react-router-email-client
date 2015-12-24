import React from 'react';

export const Modal = ({
  idName,
  elements,
  onButtonClick,
  buttonName
}) => (
  <div
    id={idName}
    >
    <div className="yui3-widget-bd">
      <form>
        <fieldset>
          {elements.map((element, i) => 
                        {
                          return <p key={i}>
                            <label>{element.label}</label>
                            <input 
                              ref={element.ref}
                              id={element.id}
                              placeholder={element.placeholder}
                            />
                          </p>
                        })}
        </fieldset>
        <button
          onClick={onButtonClick}
          >
          {buttonName}
        </button>
      </form>
    </div>
  </div>
);
