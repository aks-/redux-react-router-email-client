const SELECT_BOX = 'SELECT_BOX';
const LOG_OUT = 'LOG_OUT';

export const boxSelector = (
    state = 'inbox',
    action
) => {
  switch (action.type) {
    case SELECT_BOX:
      return action.box;
    case LOG_OUT:
      return 'inbox'
    default:
      return state;
  }
};
