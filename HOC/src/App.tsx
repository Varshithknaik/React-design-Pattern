import "./App.css";
import includeUser from "./components/include-user";
import { UserInfo } from "./components/user-info";
// import logProps from "./components/log-props";

const UserInfoWithLoader = includeUser({ Component: UserInfo, userId: "3" });

function App() {
  return (
    <>
      <UserInfoWithLoader test={"test"} b="I am be" c={21} />
    </>
  );
}

export default App;
