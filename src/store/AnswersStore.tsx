import { createContext, Dispatch, useReducer } from "react";
import Reducer from "./Reducer";

type StateType = {
  loading: boolean;
  query: string;
};

const initialState: StateType = {
  loading: false,
  query: "",
};

const AnswersStore = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext([
  initialState,
  (() => {}) as Dispatch<"SET_POSTS">,
]);
export default AnswersStore;
