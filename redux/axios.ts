import axios from "axios";

const fetch = axios.create({
  baseURL: process.env.API_HOST,
});

const localFetch = axios.create({
  baseURL: process.env.API_HOST,
});

localFetch.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    "access_token"
  )}`;

  return config;
});

export { fetch, localFetch };
