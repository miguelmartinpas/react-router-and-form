import { combineReducers } from 'redux';
import postsReducer from './posts';
import setPostReducer from './save-post';

const rootReducer = combineReducers({
    posts: postsReducer,
    savePost: setPostReducer
});

export default rootReducer;
