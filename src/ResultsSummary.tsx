import React from "react";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  //Insert Props Here
  totalResults: number;
  visibleResults: number;
};

const ResultsSummary: React.FC<Props> = ({ totalResults, visibleResults }) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="text-sm text-gray-500">
        Showing {visibleResults} of {totalResults} glasses
      </div>
      <div className="text-gray-500 text-sm flex items-center hover:underline cursor-pointer">
        Sort By <FaChevronDown className="ml-2" />
      </div>
    </div>
  );
};

export default ResultsSummary;
