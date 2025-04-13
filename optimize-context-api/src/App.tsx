import { createContext, Dispatch, useContext, useReducer } from "react";
import "./App.css";
import Display from "./components/display";
import Buttons from "./components/buttons";

type State = {
  count: number;
};

type Action = {
  type: "INCREMENT" | "DECREMENT";
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

type CartContext = {
  state: { count: number };
  dispatch: Dispatch<Action>;
};

export const Context = createContext<CartContext | null>(null);

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Display />
      <Buttons />
    </Context.Provider>
  );
}

export function useCartContext() {
  const value = useContext(Context);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.Provider");
  }

  return value;
}

export default App;
