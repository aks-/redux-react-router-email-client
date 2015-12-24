const SELECT_BOX = 'SELECT_BOX';

export const boxSelector = (state = 'inbox', action) => {
  switch (action.type) {
    case SELECT_BOX:
      return action.box;
    default:
      return state;
  }
};
