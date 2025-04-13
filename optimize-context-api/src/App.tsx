import "./App.css";
import Display from "./components/display";
import Buttons from "./components/buttons";
import { CardProvider } from "./components/cart-context";

function App() {
  return (
    <CardProvider>
      <Display />
      <Buttons />
    </CardProvider>
  );
}

export default App;
