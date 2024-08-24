import axios from 'axios';

// Access API URL from environment variables
const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
  throw new Error('REACT_APP_API_URL is not defined in .env file');
}

export const fetchPosts = () => axios.get(API_URL);
export const fetchPostById = (id) => axios.get(`${API_URL}/${id}`);
export const createPost = (post) => axios.post(API_URL, post);
export const updatePost = (id, post) => axios.put(`${API_URL}/${id}`, post);
export const deletePost = (id) => axios.delete(`${API_URL}/${id}`);
