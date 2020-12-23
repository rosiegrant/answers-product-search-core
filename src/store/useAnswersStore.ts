import { SortBy } from "@yext/answers-core";
import { useContext } from "react";
import RecentSearches from "recent-searches";
import { answersCore, verticalKey } from "./../answers.config";
import { AppContext } from "./AnswersStore";
import { getFacetFilters, toggleFacetObject } from "./facetUtilties";

const recentSearches = new RecentSearches();

export const useAnswersStore = () => {
  const { state, dispatch } = useContext(AppContext);
  const { query, facets, entities, sortBys } = state;

  const runSearch = async (q: string = query) => {
    console.log(`Getting Results for ${q}`);
    recentSearches.setRecentSearch(q);

    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    dispatch({
      type: "SET_QUERY",
      query: q,
    });
    const res = await answersCore.verticalSearch({
      query: q,
      context: {},
      verticalKey,
      retrieveFacets: true,
      // facetFilters: getFacetFilters(facets),
    });
    console.log(res.verticalResults.results);
    dispatch({
      type: "SET_VERTICAL_RESPONSE",
      response: res,
    });
  };

  const fetchAutocomplete = async (q: string = query) => {
    const res = await answersCore.verticalAutoComplete({
      input: q,
      verticalKey,
    });
    dispatch({
      type: "SET_AUTOCOMPLETE",
      querySuggestions: res.results,
      recentSearches: recentSearches.getRecentSearches(q),
    });
  };

  const updateSortBys = async (sortBys: SortBy[] | undefined) => {
    dispatch({
      type: "UPDATE_SORT_BYS",
      sortBys,
    });
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    console.log(sortBys);
    const res = await answersCore.verticalSearch({
      query,
      context: {},
      verticalKey,
      retrieveFacets: true,
      sortBys,
      facetFilters: getFacetFilters(facets),
    });
    dispatch({
      type: "SET_VERTICAL_RESPONSE",
      response: res,
    });
  };

  const toggleFacet = async (
    facetFieldId: string,
    optionDisplayName: string
  ) => {
    const updatedFacets = toggleFacetObject(
      state.facets,
      facetFieldId,
      optionDisplayName
    );

    dispatch({
      type: "UPDATE_FACETS",
      facets: updatedFacets,
    });
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    const res = await answersCore.verticalSearch({
      query,
      context: {},
      verticalKey,
      retrieveFacets: true,
      sortBys,
      facetFilters: getFacetFilters(updatedFacets),
    });
    dispatch({
      type: "SET_VERTICAL_RESPONSE",
      response: res,
    });
  };

  const loadMore = async () => {
    console.log("Loading More");
    const res = await answersCore.verticalSearch({
      query,
      context: {},
      verticalKey,
      retrieveFacets: true,
      facetFilters: getFacetFilters(facets),
      offset: entities.length,
    });

    dispatch({
      type: "APPEND_ENTITIES",
      entities: res.verticalResults.results.map((r) => r.rawData),
    });
  };

  return {
    state,
    actions: {
      runSearch,
      fetchAutocomplete,
      toggleFacet,
      loadMore,
      updateSortBys,
    },
  };
};
