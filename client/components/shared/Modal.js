import React from 'react';

export const Modal = ({
  idName,
  display,
  elements,
  onButtonClick,
  buttonName,
  onCancelClick,
  dropDownElements
}) => {
  const divStyle = {
    backgroundColor: '#e3e3d3',
    top: '40%',
    left: '40%',
    position: 'absolute',
    display
  };
  return <div
    style={divStyle}
    id={idName}
    >
    <div className="yui3-widget-bd">
      <form>
        <fieldset>
          {elements.map((element, i) => 
                        {
                          return <p key={i}>
                            <label>{element.label}</label>
                            {element.isDropDown ?
                              <select
                                ref={element.ref}
                                if={element.id}
                                placeholder={element.placeholder}
                                >
                                {dropDownElements.map(x => {
                                  return <option value={x}>
                                    {x}
                                  </option>
                                })}
                              </select> :
                                <input 
                                  ref={element.ref}
                                  id={element.id}
                                  placeholder={element.placeholder}
                                />
                              }
                          </p>
                        })}
        </fieldset>
        <button
          onClick={onButtonClick}
          >
          {buttonName}
        </button>
        <button
          onClick={onCancelClick}
          >
          Cancel
        </button>
      </form>
    </div>
  </div>
};
