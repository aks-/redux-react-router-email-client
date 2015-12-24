import {
  Map,
  List,
  fromJS
} from 'immutable';
import generateRandomString from '../lib/generateRandomString';
import { emails } from './emails';
import { selectBox } from './selectBox';
import { emailSelector } from './emailSelector';
import { unread } from './unread';
import { userInfo } from './userInfo';

export const emailApp = (state = {}, action) => {
  return {
    selectedEmailIndex: emailSelector(
      state.selectedEmailIndex,
      action
    ),
    userInfo: userInfo(
      state.userInfo,
      action
    ),
    selectedBox: selectBox(
      state.selectedBox,
      action
    ),
    emails: emails(
      state.emails,
      action
    ),
    unread: unread(
      state.unread,
      action
    )
  };
};
