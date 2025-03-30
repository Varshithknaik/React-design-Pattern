import "./App.css";
import { BookInfo } from "./components/book-info";
import { UserInfo } from "./components/user-info";

function App() {
  return (
    <>
      <UserInfo userId={1} />
      <UserInfo userId={2} />
      <UserInfo userId={3} />
      <br />
      <hr />
      <br />
      <BookInfo bookId={1} />
      <BookInfo bookId={2} />
      <BookInfo bookId={3} />
    </>
  );
}

export default App;
