import _ from 'lodash';

import { SET_POST } from '../actions';

const savePost = (state = {}, action) => {
  switch(action.type) {
    case SET_POST:
      console.log(SET_POST, action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}

export default savePost;
