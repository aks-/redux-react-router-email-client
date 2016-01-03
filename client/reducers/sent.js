import {
  Map,
  List,
  fromJS
} from 'immutable';

const FORWARD_EMAIL = 'FORWARD_EMAIL';
const SEND_REPLY = 'SEND_REPLY';
const SEND_EMAIL = 'SEND_EMAIL';
const FETCH_BOX = 'FETCH_BOX';

export const sent = (state = List([]), action) => {
  switch (action.type) {
    case FORWARD_EMAIL:
      const { email } = action;
      if (state.size > 0) 
        return state.push(fromJS(email));
    case SEND_REPLY:
      const { reply } = action;
      if (state.size > 0)
        return state.push(fromJS(reply));
    case SEND_EMAIL:
      const composedEmail = action.email;
      if (state.size > 0)
        return state.push(fromJS(composedEmail));
    case FETCH_BOX:
      if (state.size > 0)
        return state;
      return List(fromJS(action.emails));
    default:
      return state;
  }
};
