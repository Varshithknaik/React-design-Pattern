import api from "./api";

const URLS = {
  fethcUsersUrl: "users",
};

export const fetchUsers = () => {
  return api.get(URLS.fethcUsersUrl, {
    baseURL: "https://jsonplaceholder.typicode.com/",
  });
};
