import { SortBy } from "@yext/answers-core";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import { useAnswersStore } from "./store/useAnswersStore";

type Props = {
  //Insert Props Here
};

const SortByController: React.FC<Props> = ({}) => {
  const { state, actions } = useAnswersStore();
  const [selectedSortOption, setSelectedSortOption] = useState(0);
  const [showingOptions, setShowingOptions] = useState(false);

  const sortOptions: {
    label: string;
    sortBys?: SortBy[];
  }[] = [
    {
      label: "Most Popular",
    },
    {
      label: "Most Relevant",
    },
    {
      label: "A-Z",
      sortBys: [
        {
          type: "FIELD",
          field: "name",
          direction: "ASC",
        },
      ],
    },
    {
      label: "Price (High to Low)",
      sortBys: [
        {
          type: "FIELD",
          field: "c_price",
          direction: "DESC",
        },
      ],
    },
    {
      label: "Price (Low to High)",
      sortBys: [
        {
          type: "FIELD",
          field: "c_price",
          direction: "ASC",
        },
      ],
    },
  ];

  const changeSortOption = (newIndex: number) => {
    setSelectedSortOption(newIndex);
    setShowingOptions(false);
    actions.updateSortBys(sortOptions[newIndex].sortBys);
  };
  return (
    <div className="relative">
      <div
        className="text-gray-500 text-sm hover:underline cursor-pointer flex items-center"
        onClick={() => setShowingOptions((e) => !e)}
      >
        {sortOptions[selectedSortOption].label}
        <FaChevronDown className="ml-2" />
      </div>
      {showingOptions && (
        <div className="absolute top-8 right-0 shadow-lg border bg-white z-50 w-48 text-sm rounded-sm overflow-hidden text-gray-700 font-light">
          {sortOptions.map((o, i) => (
            <div
              key={i}
              onClick={() => changeSortOption(i)}
              className="pl-2 pr-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer "
            >
              <div className="w-6">
                {i === selectedSortOption && <MdCheck />}
              </div>
              <div>{o.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortByController;
