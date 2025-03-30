import "./App.css";
import { GreenSmallButton, RedButton } from "./components/composition";
import RecursiveComponent from "./components/recursive";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

function App() {
  return (
    <>
      <RecursiveComponent data={myNestedObject} />

      <RedButton text={"Red Button"} />
      <GreenSmallButton text={"Green Small Button"} />
    </>
  );
}

export default App;
