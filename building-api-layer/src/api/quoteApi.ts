/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from "axios";
import api from "./api";

export const fetchTopQuotes = (config: AxiosRequestConfig) => {
  return api.get("top_quotes", config).then((res) => res.data.quotes);
};

export const postQuotes = (quote: any) => api.post("", quote);

export const resetQuotes = () => api.post("reset", {});

export const fetchQuotesByPage = (page: number) =>
  api.get("", { params: { page } }).then((res) => res.data);

export const fetchQuotesByCursor = (cursor: string) =>
  api.get("", { params: { cursor } }).then((res) => res.data);
