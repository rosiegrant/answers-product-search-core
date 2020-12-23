import {
  AutoCompleteResult,
  Facet,
  SortBy,
  VerticalResults,
} from "@yext/answers-core";
import { createContext, Dispatch, useReducer } from "react";
import reducer, { Action } from "./reducer";

export type InitialStateType = {
  loading: boolean;
  query: string;
  verticalresults?: VerticalResults;
  entities: any[];
  facets: Facet[];
  querySuggestions: AutoCompleteResult[];
  recentSearches: {
    query: string;
  }[];
  sortBys?: SortBy[];
};

const initialState: InitialStateType = {
  loading: false,
  query: "",
  verticalresults: undefined,
  entities: [],
  facets: [],
  querySuggestions: [],
  recentSearches: [],
};

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AnswersStore = ({ children }: { children: React.ReactNode }) => {
  //@ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AnswersStore;
