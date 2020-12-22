import {
  AnswersCore,
  AutoCompleteResult,
  Facet,
  VerticalSearchResponse,
} from "@yext/answers-core";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

export const useAnswersVertical = <T>(
  answers: AnswersCore,
  verticalKey: string
) => {
  const [
    verticalResponse,
    setVerticalResponse,
  ] = useState<VerticalSearchResponse>();
  const [entities, setEntities] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [localState, setLocalState] = useImmer<{ facets: Facet[] }>({
    facets: [],
  });

  const [isDirty, setIsDirty] = useState(true);
  const [querySuggestions, setQuerySuggestions] = useState<
    AutoCompleteResult[]
  >([]);

  const { facets } = localState;
  const facetFilters = facets
    .map((f) => {
      return [
        ...f.options
          .filter((o) => o.selected)
          .map((o) => {
            return o.filter;
          }),
      ];
    })
    .flat();

  const runSearch = async (q: string = query) => {
    console.log(`Getting Results for ${q}`);
    setLoading(true);
    const res = await answers.verticalSearch({
      query: q,
      context: {},
      verticalKey,
      retrieveFacets: true,
      facetFilters,
    });
    setVerticalResponse(res);
    setEntities(res.verticalResults.results.map((r) => r.rawData as T));
    setLoading(false);
    setLocalState((f) => {
      f.facets = (res.facets as Facet[]) || [];
    });
  };

  const loadMore = async () => {
    console.log("Loading More");
    const res = await answers.verticalSearch({
      query,
      context: {},
      verticalKey,
      retrieveFacets: true,
      facetFilters,
      offset: entities.length,
    });

    setEntities((e) => {
      return [...e, ...res.verticalResults.results.map((r) => r.rawData as T)];
    });
  };

  const toggleFacet = (facet: string, option: string) => {
    setLocalState((s) => {
      s.facets.forEach((f) => {
        if (f.displayName === facet) {
          f.options.forEach((o) => {
            if (o.displayName === option) {
              o.selected = !o.selected;
            }
          });
        } else return;
      });
    });
    setIsDirty(true);
  };

  const updateAutocomplete = async (q: string = query) => {
    const res = await answers.verticalAutoComplete({
      input: q,
      verticalKey,
    });
    setQuerySuggestions(res.results);
  };

  useEffect(() => {
    if (isDirty) {
      runSearch(query);
      setIsDirty(false);
    }
  }, [isDirty]);

  return {
    results: verticalResponse?.verticalResults,
    facets,
    toggleFacet,
    runSearch,
    updateAutocomplete,
    querySuggestions,
    entities,
    loading,
    loadMore,
  };
};
