const SELECT_EMAIL_TO_READ = 'SELECT_EMAIL_TO_READ';

export const emailSelector = (state = 0, action) => {
  switch (action.type) {
    case SELECT_EMAIL_TO_READ:
      return action.index;
    default: 
      return state;
  }
};
