/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";

export const fetchTopQuotes = () => {
  return api.get("top_quotes").then((res) => res.data.quotes);
};

export const postQuotes = (quote: any) => api.post("", quote);

export const resetQuotes = () => api.post("reset", {});

export const fetchQuotesByPage = (page: number) =>
  api.get("", { params: { page } }).then((res) => res.data);
