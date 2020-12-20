import { AutoCompleteResult } from "@yext/answers-core";
import classnames from "classnames";
import React, { useRef, useState } from "react";
import { FaSpinner, FaTimesCircle } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

type Props = {
  //Insert Props Here
  runSearch: (query: string) => void;
  placeholder?: string;
  loading?: boolean;
  querySuggestions: AutoCompleteResult[];
  updateAutocomplete: (query: string) => void;
};

const SearchBar: React.FC<Props> = ({
  runSearch,
  placeholder = "Search ...",
  loading,
  querySuggestions = [],
  updateAutocomplete,
}) => {
  const inputElement = useRef(null);

  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [justSearched, setJustSearched] = useState(false);

  const nextSuggestion = () => {
    setSelectedSuggestion((s) => Math.min(s + 1, querySuggestions.length - 1));
  };

  const prevSuggestion = () => {
    setSelectedSuggestion((s) => Math.max(s - 1, -1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    updateAutocomplete(e.target.value);
    setSelectedSuggestion(-1);
    setJustSearched(false);
  };

  const showQuerySuggestion =
    isFocused && querySuggestions.length > 0 && !justSearched;
  return (
    <div className="relative mx-2 mt-2">
      <form
        className="border-b py-2 px-4 mb-2 flex items-center focus-within:shodow-lg focus-within:border group text-gray-700"
        onSubmit={(e) => {
          e.preventDefault();
          if (selectedSuggestion > -1) {
            const query = querySuggestions[selectedSuggestion].value;
            setQuery(query);
            runSearch(query);
          } else {
            runSearch(query);
          }
          setJustSearched(true);
        }}
      >
        <MdSearch className="mr-2 text-gray-600 text-xl" />
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={inputElement}
          value={query}
          placeholder={placeholder}
          onChange={handleChange}
          className="w-full focus:outline-none"
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              nextSuggestion();
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              prevSuggestion();
            }
          }}
        />
        {loading && <FaSpinner className="animate-spin text-gray-500" />}
        {!loading && query.length > 0 && (
          <FaTimesCircle
            className="text-gray-300 cursor-pointer group-hover:opacity-100 opacity-0"
            onClick={() => {
              setQuery("");
              runSearch("");
              updateAutocomplete("");
            }}
          />
        )}
      </form>
      {showQuerySuggestion && (
        <div className="absolute top-0 mt-12 left-0 right-0 bg-white text-gray-700 font-light border-b">
          {querySuggestions.map((q, i) => (
            <div
              onMouseDown={() => {
                setQuery(q.value);
                runSearch(q.value);
              }}
              className={classnames(
                "py-1 px-4 hover:bg-gray-100 cursor-pointer flex items-center",
                {
                  "bg-gray-100": selectedSuggestion === i,
                }
              )}
            >
              <MdSearch className="mr-2 text-gray-600" />
              {q.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
