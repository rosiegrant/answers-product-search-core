import classnames from "classnames";
import React, { useRef, useState } from "react";
import { FaRegClock, FaSpinner, FaTimesCircle } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { useAnswersStore } from "./store/useAnswersStore";

type Props = {
  //Insert Props Here

  placeholder?: string;
};

const SearchBar: React.FC<Props> = ({ placeholder = "Search ..." }) => {
  const inputElement = useRef(null);

  const { state, actions } = useAnswersStore();
  const { loading, querySuggestions, recentSearches } = state;
  const { fetchAutocomplete, runSearch } = actions;

  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [justSearched, setJustSearched] = useState(false);

  const autocompleteOptions = [
    ...recentSearches.map((s) => {
      return {
        value: s.query,
        type: "RECENT",
      };
    }),
    ...querySuggestions.map((s) => {
      return {
        ...s,
        type: "SUGGESTION",
      };
    }),
  ];

  const nextSuggestion = () => {
    setSelectedSuggestion((s) =>
      Math.min(s + 1, autocompleteOptions.length - 1)
    );
  };

  const prevSuggestion = () => {
    setSelectedSuggestion((s) => Math.max(s - 1, -1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    fetchAutocomplete(e.target.value);
    setSelectedSuggestion(-1);
    setJustSearched(false);
  };

  const showQuerySuggestion =
    isFocused && autocompleteOptions.length > 0 && !justSearched;
  return (
    <div className="relative m-2 flex items-center">
      {isFocused && <div className="w-72"></div>}
      <div
        className={classnames(
          "w-72 transition rounded-full ease-in-out bg-gray-100 relative duration-500 focus-within:z-50 focus-within:bg-white border border-transparent focus-within:border-gray-300 focus-within:absolute top-0"
        )}
        style={
          isFocused
            ? {
                borderRadius: "1.2rem",
              }
            : {}
        }
      >
        <form
          className="py-2 px-4 flex items-center group text-gray-700 rounded-full"
          onSubmit={(e) => {
            e.preventDefault();
            if (selectedSuggestion > -1) {
              const query = autocompleteOptions[selectedSuggestion].value;
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
            className="w-full focus:outline-none font-light bg-transparent"
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
              className="text-gray-500 cursor-pointer group-hover:opacity-100 opacity-0 text-xl"
              onClick={() => {
                setQuery("");
                runSearch("");
                fetchAutocomplete("");
              }}
            />
          )}
        </form>
        {showQuerySuggestion && (
          <div className="text-gray-700 font-light pb-2">
            {autocompleteOptions.map((q, i) => (
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
                <div className="mr-2 text-gray-500">
                  {q.type === "SUGGESTION" && <MdSearch />}
                  {q.type === "RECENT" && <FaRegClock className="text-xs" />}
                </div>
                {q.value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
