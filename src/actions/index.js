import axios from 'axios';

const API_KEY = '6a78596d062df78380eff5944c4e5567';
const apiUrl = 'http://reduxblog.herokuapp.com/api';
const getUrl = `${apiUrl}/posts`
const saveUrl = getUrl;
const urlKey = `?key=${API_KEY}`;

export const FETCH_POSTS = 'FETCH_POSTS';
export function fetchPosts() {
  const request = axios.get(`${getUrl}${urlKey}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export const SET_POST = 'SET_POST';
export function setPost(post) {
  const request = axios.post(`${getUrl}${urlKey}`, post);
  return {
    type: SET_POST,
    payload: request
  };
}

export const DELETE_POST = 'DELETE_POST';
export function deletePost(post) {
  return axios.delete(`${getUrl}/${post.id}${urlKey}`).then(
    () => fetchPosts()
  )
}
