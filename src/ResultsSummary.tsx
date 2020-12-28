import React from "react";
import { FaFilter } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useAnswers } from "yext-answers-react";
import SortByController from "./SortByController";

type Props = {
  //Insert Props Here
  onToggleFilters: () => void;
};

const ResultsSummary: React.FC<Props> = ({ onToggleFilters }) => {
  const {
    state,
    actions: { toggleFacet, clearSearch },
  } = useAnswers();
  const { verticalresults, results, appliedFilters } = state;
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="text-sm text-gray-500 flex items-center ">
        <div>
          Showing {results.length} of {verticalresults?.resultsCount} glasses
        </div>
        <div className="border-l  ml-2  flex items-center flex-wrap">
          {appliedFilters.map((f) => (
            <div className="ml-2 flex items-center " key={f.fieldId}>
              {f.displayName}:{" "}
              {f.source === "FACET" &&
                f.values.map((v) => (
                  <button
                    key={v}
                    className="text-gray-600 border px-1 rounded-sm flex items-center ml-1 hover:bg-gray-100 text-sm"
                    onClick={() => toggleFacet(f.fieldId, v)}
                  >
                    {v}
                    <MdClose className="ml-1" />
                  </button>
                ))}
              {f.source === "NLP" && (
                <div className="ml-1">{f.values.join(", ")}</div>
              )}
            </div>
          ))}
        </div>
        {appliedFilters.length > 0 && (
          <div className="border-l  ml-2  flex items-center pl-2">
            <button className="hover:underline px-1" onClick={clearSearch}>
              Clear All
            </button>
          </div>
        )}
      </div>
      <div className="hidden md:flex">
        <SortByController />
      </div>
      <div
        className="flex md:hidden text-gray-500 text-sm items-center hover:underline cursor-pointer"
        onClick={onToggleFilters}
      >
        Filter <FaFilter className="ml-2" />
      </div>
    </div>
  );
};

export default ResultsSummary;
