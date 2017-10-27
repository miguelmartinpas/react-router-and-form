import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

const posts = (state = {}, action) => {
  switch(action.type) {
    case FETCH_POSTS:
    console.log(FETCH_POSTS, action.payload.data);
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}

export default posts;
