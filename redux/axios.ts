import axios from "axios";

const fetch = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

const localFetch = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

localFetch.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    "access_token"
  )}`;

  return config;
});

export { fetch, localFetch };
