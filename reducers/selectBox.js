const SELECT_BOX = 'SELECT_BOX';

export const selectBox = (state = 'inbox', action) => {
  switch (action.type) {
    case SELECT_BOX:
      return action.box;
    default:
      return state;
  }
};
