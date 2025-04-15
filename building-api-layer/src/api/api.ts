import axios, { AxiosInstance } from "axios";
import type { CreateAxiosDefaults } from "axios";

const axiosParams: CreateAxiosDefaults = {
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:8080" : "/",
};

const axiosInstance = axios.create(axiosParams as CreateAxiosDefaults);
const api = (axios: AxiosInstance) => {
  return {
    get: (url: string, config = {}) => axios.get(url, config),
    post: (url: string, data = {}, config = {}) =>
      axios.post(url, data, config),
    delete: (url: string, config = {}) => axios.delete(url, config),
    patch: (url: string, data = {}, config = {}) =>
      axios.patch(url, data, config),
    put: (url: string, data = {}, config = {}) => axios.put(url, data, config),
  };
};

export default api(axiosInstance);
