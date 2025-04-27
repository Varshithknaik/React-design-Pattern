/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";

const URLS = {
  getMeal: "search.php",
};

export const searchMeal = (query: string, config: any) => {
  console.log(query);
  return api
    .get(URLS.getMeal, {
      baseURL: "https://www.themealdb.com/api/json/v1/1/",
      params: {
        s: query,
      },
      ...config,
    })
    .then((res: any) => {
      return res.data.meals;
    });
};
