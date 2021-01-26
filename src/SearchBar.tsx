import classnames from "classnames";
import React, { useRef, useState } from "react";
import { FaRegClock, FaSpinner, FaTimesCircle } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { useAnswers } from "yext-answers-react";

type Props = {
  //Insert Props Here

  placeholder?: string;
};

const SearchBar: React.FC<Props> = ({ placeholder = "Search ..." }) => {
  const inputElement = useRef(null);

  const { state, actions } = useAnswers();
  const { loading, autocomplete, visibleSearchTerm } = state;
  const {
    handleSearchTermChange,
    runSearch,
    nextAutocompleteOption,
    prevAutocompleteOption,
  } = actions;

  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchTermChange(e.target.value);
  };

  const showQuerySuggestion =
    isFocused && autocomplete.autocompleteOptions.length > 0;
  return (
    <div className="relative m-2 flex items-center">
      {isFocused && <div className="w-72"></div>}
      <div
        className={classnames(
          "w-72 transition rounded-full ease-in-out bg-gray-100 relative duration-500 focus-within:z-50 focus-within:absolute focus-within:bg-white focus-within:border-gray-300 border-transparent top-0"
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
            runSearch();
          }}
        >
          <MdSearch className="mr-2 text-gray-600 text-xl" />
          <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            ref={inputElement}
            value={visibleSearchTerm}
            placeholder={placeholder}
            onChange={handleChange}
            className="w-full focus:outline-none font-light bg-transparent"
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                nextAutocompleteOption();
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                prevAutocompleteOption();
              }
            }}
          />
          {loading && <FaSpinner className="animate-spin text-gray-500" />}
          {!loading && visibleSearchTerm.length > 0 && (
            <FaTimesCircle
              className="text-gray-500 cursor-pointer group-hover:opacity-100 opacity-0 text-xl"
              onClick={() => {
                runSearch("");
              }}
            />
          )}
        </form>
        {showQuerySuggestion && (
          <div className="text-gray-700 font-light pb-2">
            {autocomplete.autocompleteOptions.map((q, i) => (
              <div
                key={q.value + q.type}
                onMouseDown={() => {
                  runSearch(q.value);
                }}
                className={classnames(
                  "py-1 px-4 hover:bg-gray-100 cursor-pointer flex items-center",
                  {
                    "bg-gray-100": autocomplete.selectedIndex === i,
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
