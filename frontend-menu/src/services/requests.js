import axios from 'axios';

const API = axios.create({
  baseURL: `http://localhost:${process.env.APP_PORT || '3001'}`,
});

export const requestAllFoods = async (endpoint) => {
  const { data } = await API.get(endpoint);
  return data;
};
