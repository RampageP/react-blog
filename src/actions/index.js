import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_key = '?key=felkgrnj';

export default function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_key}`);
  console.log("Request",request);

  return{
    type: FETCH_POSTS,
    payload: request
  };
}
