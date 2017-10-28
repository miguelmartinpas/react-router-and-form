import { SET_POST } from '../actions';

const savePost = (state = {}, action) => {
  switch(action.type) {
    case SET_POST:
      return action.payload.data;
    default:
      return state;
  }
}

export default savePost;
