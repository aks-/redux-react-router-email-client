const SELECT_EMAIL_TO_READ = 'SELECT_EMAIL_TO_READ';
const LOG_OUT = 'LOG_OUT';

export const emailSelector = (state = 0, action) => {
  switch (action.type) {
    case SELECT_EMAIL_TO_READ:
      return action.index;
    case LOG_OUT:
      return 0;
    default: 
      return state;
  }
};
