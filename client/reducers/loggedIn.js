const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

export const loggedIn = (state = false, action) => {
  switch (action.type) {
    case LOG_IN:
      return true;
    case LOG_OUT:
      return false;
    default:
      return state;
  }
};
