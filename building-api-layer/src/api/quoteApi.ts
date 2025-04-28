import api from "./api";

export const fetchTopQuotes = () => {
  return api.get("top_quotes").then((res) => res.data.quotes);
};
