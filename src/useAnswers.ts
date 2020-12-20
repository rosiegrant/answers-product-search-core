import {
  AnswersCore,
  AutoCompleteResult,
  Facet,
  Result,
} from "@yext/answers-core";
import { useEffect, useState } from "react";

export const useAnswersVertical = <T>(
  answers: AnswersCore,
  verticalKey: string
) => {
  const [results, setResults] = useState<Result[]>([]);
  const [entities, setEntities] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [facets, setFacets] = useState<readonly Facet[]>([]);
  const [query, setQuery] = useState("");
  const [querySuggestions, setQuerySuggestions] = useState<
    AutoCompleteResult[]
  >([]);

  const runSearch = async (q: string = query) => {
    console.log(`Getting Results for ${q}`);
    setLoading(true);
    const res = await answers.verticalSearch({
      query: q,
      context: {},
      verticalKey,
      retrieveFacets: true,
    });
    console.log(res.verticalResults.results);
    setResults(res.verticalResults.results);
    setFacets(res.facets || []);
    setEntities(res.verticalResults.results.map((r) => r.rawData as T));
    setLoading(false);
  };

  const updateAutocomplete = async (q: string = query) => {
    const res = await answers.verticalAutoComplete({
      input: q,
      verticalKey,
    });
    setQuerySuggestions(res.results);
  };

  useEffect(() => {
    runSearch(query);
  }, []);

  return {
    results,
    facets,
    query,
    setQuery,
    runSearch,
    updateAutocomplete,
    querySuggestions,
    entities,
    loading,
  };
};
