import { fromJS } from 'immutable';

const SHOW_COMPOSE_DISPLAY = 'SHOW_COMPOSE_DISPLAY';
const SHOW_REPLY_DISPLAY = 'SHOW_REPLY_DISPLAY';
const SHOW_FORWARD_DISPLAY = 'SHOW_FORWARD_DISPLAY';
const HIDE_COMPOSE_DISPLAY = 'HIDE_COMPOSE_DISPLAY';
const HIDE_REPLY_DISPLAY = 'HIDE_REPLY_DISPLAY';
const HIDE_FORWARD_DISPLAY = 'HIDE_FORWARD_DISPLAY';
const block = 'block';
const none = 'none';

export const modalDisplay = (state = fromJS({
  composeDisplay: none,
  replyDisplay: none,
  forwardDisplay: none
}), action) => {
  switch (action.type) {
    case SHOW_COMPOSE_DISPLAY:
      return fromJS({
        composeDisplay: block,
        replyDisplay: none,
        forwardDisplay: none
      });
    case SHOW_REPLY_DISPLAY:
      return fromJS({
        composeDisplay: none,
        replyDisplay: block,
        forwardDisplay: none
      })
    case SHOW_FORWARD_DISPLAY:
      return fromJS({
        composeDisplay: none,
        replyDisplay: none,
        forwardDisplay: block
      })
    case HIDE_COMPOSE_DISPLAY:
    case HIDE_REPLY_DISPLAY:
    case HIDE_FORWARD_DISPLAY:
      return fromJS({
        composeDisplay: none,
        replyDisplay: none,
        forwardDisplay: none
      });
    default:
      return state;
  }
};
