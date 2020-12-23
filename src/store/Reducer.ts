import {
  AutoCompleteResult,
  Facet,
  VerticalSearchResponse,
} from "@yext/answers-core";
import { InitialStateType } from "./AnswersStore";
export type Action =
  | { type: "SET_LOADING"; loading: boolean }
  | { type: "SET_VERTICAL_RESPONSE"; response: VerticalSearchResponse }
  | { type: "SET_QUERY_SUGGESTIONS"; querySuggestions: AutoCompleteResult[] }
  | { type: "APPEND_ENTITIES"; entities: any[] }
  | { type: "SET_QUERY"; query: string }
  | { type: "UPDATE_FACETS"; facets: Facet[] };

const reducer = (state: InitialStateType, action: Action): InitialStateType => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.loading,
      };
    case "SET_QUERY":
      const { query } = action;
      return {
        ...state,
        query,
      };
    case "SET_VERTICAL_RESPONSE":
      const { response } = action;
      return {
        ...state,
        loading: false,
        verticalresults: response.verticalResults,
        entities: response.verticalResults.results.map(
          (r: any) => r.rawData as any
        ),
        facets: (response.facets as any) as Facet[],
      };
    case "SET_QUERY_SUGGESTIONS":
      const { querySuggestions } = action;
      return {
        ...state,
        querySuggestions,
      };
    case "APPEND_ENTITIES":
      return {
        ...state,
        entities: [...state.entities, ...action.entities],
      };
    case "UPDATE_FACETS":
      const { facets } = action;
      return {
        ...state,
        facets,
      };

    default:
      return state;
  }
};

export default reducer;
