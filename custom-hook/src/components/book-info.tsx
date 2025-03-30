import useResource from "./resource.hook";

export interface BookProps {
  name: string;
  price: string;
  title: string;
  pages: string;
}

export const BookInfo = ({ bookId }: { bookId: number }) => {
  // const { name, price, title, pages } = book || {};
  const book = useResource<BookProps>({ resourceUrl: `/api/books/${bookId}` });
  const { name, price, title, pages } = book || {};
  console.log(book);
  return book ? (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h3>Title: {title}</h3>
      <p>Number of Pages: {pages}</p>
    </>
  ) : (
    <h1> Loading...</h1>
  );
};
