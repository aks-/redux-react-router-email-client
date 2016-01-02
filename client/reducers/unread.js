import { fetchUnread } from '../lib/fetchDocuments';

const GET_UNREAD = 'GET_UNREAD';
const LOG_OUT = 'LOG_OUT';

export const unread = (state = 0, action) => {
  switch (action.type) {
    case GET_UNREAD:
      return action.unread
    case LOG_OUT:
      return 0;
    default:
      return state;
  }
};
