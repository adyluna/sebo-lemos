import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sebo-backend-production.up.railway.app/',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const result = await api.get(endpoint);
  const { data } = result;
  return data;
};

export const requestPost = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;