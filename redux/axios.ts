import axios from "axios";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const fetch = axios.create({
  baseURL: publicRuntimeConfig.API_HOST,
});

const localFetch = axios.create({
  baseURL: publicRuntimeConfig.API_HOST,
});

localFetch.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    "access_token"
  )}`;

  return config;
});

export { fetch, localFetch };
