// import useCurrentUser from "./current-user.hook";
import useUser from "./user.hook";

export interface UserProps {
  // A more descriptive name for the interface
  name: string;
  age: number; // Age should likely be a number
  country: string;
  books: string[];
}

export const UserInfo = ({ userId }: { userId: number }) => {
  // const { name, age, country, books } = useCurrentUser() || {};
  const user = useUser({ userId });
  const { name, age, country, books } = user || {};
  console.log(name, age);
  return user ? (
    <>
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
