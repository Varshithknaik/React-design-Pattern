import axios from "axios";
import useDataSource from "./data-source.hook";
import { useCallback } from "react";
// import useResource from "./resource.hook";
// import useUser from "./user.hook";

export interface UserProps {
  // A more descriptive name for the interface
  name: string;
  age: number; // Age should likely be a number
  country: string;
  books: string[];
}

const fetchFromServer = async (resourceUrl: string) => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

const getFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const UserInfo = ({ userId }: { userId: number }) => {
  // const { name, age, country, books } = useCurrentUser() || {};
  // const user = useUser({ userId });

  const getData = useCallback(
    () => fetchFromServer(`/api/users/${userId}`),
    [userId]
  );

  const getDataFromLocalStorage = useCallback(
    () => getFromLocalStorage(`user-${userId}`) as string,
    [userId]
  );

  const user = useDataSource<UserProps>({
    getData,
  });

  const message = useDataSource<string>({
    getData: getDataFromLocalStorage,
  });

  console.log(message);

  const { name, age, country, books } = user || {};
  console.log(name, age);
  return user ? (
    <>
      <h1>Message: {message}</h1>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books?.map((book) => (
          <li key={book}> {book}</li>
        ))}
      </ul>
    </>
  ) : (
    <h1> Loading...</h1>
  );
};
