import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const getPostById = async (id: string) => {
  const response = await axios.get(`${API_URL}/posts/${id}`);
  return response.data;
};

export const createPost = async (title: string, body: string) => {
  const response = await axios.post(`${API_URL}/posts`, { title, body });
  return response.data;
};

export const updatePost = async (id: string, title: string, body: string) => {
  const response = await axios.put(`${API_URL}/posts/${id}`, { title, body });
  return response.data;
};

export const deletePost = async (id: string) => {
  await axios.delete(`${API_URL}/posts/${id}`);
};

export const createComment = async (postId: string, name: string, email: string, body: string) => {
  const response = await axios.post(`${API_URL}/posts/${postId}/comments`, { name, email, body });
  return response.data;
};
