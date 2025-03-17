import axios from "axios";
import "./App.css";
import { BookInfo } from "./components/book-info";
import CurrentUserLoader from "./components/current-user-loader";
import DataSource from "./components/data-source";
import ResourceLoader from "./components/resource-loader";
import SplitScreen from "./components/split-screen";
import { UserInfo } from "./components/user-info";
import UserLoader from "./components/user-loader";
import DataSourceRenderProps from "./components/data-source-with-render-props";

const LeftSideComp = ({ title }: { title: any }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComp = ({ title }: { title: any }) => {
  return <h2 style={{ background: "burlywood" }}>{title}</h2>;
};

const getDataFromServer = async (url: string) => {
  const response = await axios.get(`/api/${url}`);
  return response.data;
};

const getDataFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

const Message = ({ msg }: { msg: string }) => {
  return <h1>{msg}</h1>;
};

function App() {
  return (
    <>
      <SplitScreen leftWidth={1}>
        <LeftSideComp title={"lrft"} />
        <RightSideComp title={"right"} />
      </SplitScreen>

      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader>

      <ResourceLoader resourceUrl="books/1" resourceName="book">
        <BookInfo />
      </ResourceLoader>

      <DataSource
        getData={() => getDataFromServer("books/1")}
        resourceName="book"
      >
        <BookInfo />
      </DataSource>

      {/* Container Render Props Pattern */}
      <DataSourceRenderProps
        getData={() => getDataFromServer("books/1")}
        render={(resource) => <BookInfo book={resource} />}
      />

      <DataSourceRenderProps
        getData={() => getDataFromLocalStorage("custom")}
        render={(resource) => <Message msg={resource} />}
      />
    </>
  );
}

export default App;
