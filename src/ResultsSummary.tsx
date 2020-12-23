import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useAnswersStore } from "./store/useAnswersStore";

type Props = {
  //Insert Props Here
};

const ResultsSummary: React.FC<Props> = () => {
  const { state } = useAnswersStore();
  const { verticalresults, entities } = state;
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="text-sm text-gray-500">
        Showing {verticalresults?.resultsCount} of {entities.length} glasses
      </div>
      <div className="text-gray-500 text-sm flex items-center hover:underline cursor-pointer">
        Sort By <FaChevronDown className="ml-2" />
      </div>
    </div>
  );
};

export default ResultsSummary;
