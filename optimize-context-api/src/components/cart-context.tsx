import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

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

type StateContext = { count: number };
type DispatchContext = Dispatch<Action>;

export const StateContext = createContext<StateContext | null>(null);
export const DispatchContext = createContext<DispatchContext | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export const CardProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export function useStateContext() {
  const value = useContext(StateContext);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.Provider");
  }

  return value;
}

export function useDispatchContext() {
  const value = useContext(DispatchContext);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.Provider");
  }

  return value;
}
