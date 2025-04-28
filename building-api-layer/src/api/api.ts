/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";
import type {
  CreateAxiosDefaults,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const axiosParams: CreateAxiosDefaults = {
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:9000" : "/",
};

const axiosInstance = axios.create(axiosParams as CreateAxiosDefaults);

export const didAbort = (error: unknown): boolean => {
  if (axios.isCancel(error)) {
    return true; // Axios-specific cancellation
  }
  // Check for standard AbortError
  if (error instanceof Error && error.name === "AbortError") {
    return true;
  }
  return false;
};

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  signal?: AbortSignal;
}

export const isApiError = (error: unknown) => axios.isAxiosError(error);

const withAbort = (fn: (...args: any[]) => any) => {
  const executor = async (...args: any[]) => {
    const originalConfig = args[args.length - 1] as
      | CustomAxiosRequestConfig
      | undefined;
    const { signal: existingSignal, ...restConfig } = originalConfig || {};

    const config: AxiosRequestConfig = { ...restConfig };

    if (existingSignal) {
      config.signal = existingSignal;
    }
    try {
      if (args.length > 2) {
        const [url, body] = args;
        return await fn(url, body, originalConfig);
      } else {
        const [url] = args;
        return await fn(url, originalConfig);
      }
    } catch (error: any) {
      if (didAbort(error)) {
        error.aborted = true;
      }

      throw error;
    }
  };

  return executor;
};

const withLogging = async (promise: Promise<AxiosResponse<any, any>>) => {
  return promise.catch((error) => {
    if (process.env.REACT_API_DEBUG_API) throw error;

    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }

    console.log(error.config);
    throw error;
  });
};

const api = (axios: AxiosInstance) => {
  return {
    get: (url: string, config = {}) => withLogging(axios.get(url, config)),
    post: (url: string, data = {}, config = {}) =>
      withLogging(withAbort(axios.post)(url, data, config)),
    delete: (url: string, config = {}) => withAbort(axios.delete)(url, config),
    patch: (url: string, data = {}, config = {}) =>
      withAbort(axios.patch)(url, data, config),
    put: (url: string, data = {}, config = {}) =>
      withAbort(axios.put)(url, data, config),
  };
};

export default api(axiosInstance);
