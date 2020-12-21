import { Facet as FacetType, FacetOption } from "@yext/answers-core";
import classnames from "classnames";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdCheck } from "react-icons/md";

type Props = {
  //Insert Props Here
  facet: FacetType;
  maxOptions?: number;
  onSelectFacet: (option: FacetOption) => void;
};

const Facet: React.FC<Props> = ({ facet, maxOptions = 10, onSelectFacet }) => {
  const [expanded, setExpanded] = useState(true);

  const filteredOptions = facet.options.filter((o, i) => i < maxOptions);
  return (
    <div className=" py-2 mb-3">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded((e) => !e)}
      >
        <div className="text-black font-medium text-sm">
          {facet.displayName}
        </div>
        <div
          className={classnames(
            "text-gray-500 transform ease-in-out transition",
            {
              "rotate-90": expanded,
            }
          )}
        >
          <FaChevronRight />
        </div>
      </div>
      {expanded && (
        <div className="mt-2">
          {filteredOptions.map((o) => (
            <div
              className="font-light text-gray-500 flex items-center mb-1 group cursor-pointer"
              key={o.displayName}
              onClick={() => onSelectFacet(o)}
            >
              <div
                className={classnames(
                  "w-4 h-4 border mr-2 rounded-sm flex items-center justify-center",
                  {
                    "bg-gray-600 border-gray-600": o.selected,
                    "border group-hover:bg-gray-200 ": !o.selected,
                  }
                )}
              >
                {o.selected && <MdCheck className="text-white" />}
              </div>
              {o.displayName}{" "}
              <span className="text-xs bg-gray-100 px-1 rounded-full text-gray-600 ml-2">
                {o.count}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Facet;
