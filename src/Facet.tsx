import { Facet as FacetType, FacetOption } from "@yext/answers-core";
import classnames from "classnames";
import React, { useState } from "react";
import FlipMove from "react-flip-move";
import { MdCheck } from "react-icons/md";
import FacetContainer from "./FacetContainer";

type Props = {
  //Insert Props Here
  facet: FacetType;
  maxOptions?: number;
  onSelectFacet: (option: FacetOption) => void;
};

const Facet: React.FC<Props> = ({ facet, maxOptions = 10, onSelectFacet }) => {
  const [query] = useState("");
  const filteredOptions = facet.options
    .filter((o, i) => {
      const underMaxLength = i < maxOptions;
      let queryMatch = false;
      if (query.length > 0) {
        queryMatch = o.displayName
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase());
      } else {
        queryMatch = true;
      }
      return queryMatch && underMaxLength;
    })
    .sort((a, b) => {
      if (a.selected && b.selected) return b.count - a.count;
      else if (a.selected) return -1;
      else if (b.selected) return 1;
      else return b.count - a.count;
    });

  return (
    <FacetContainer
      name={facet.displayName}
      count={facet.options.filter((o) => o.selected).length}
    >
      <FlipMove>
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
      </FlipMove>
    </FacetContainer>
  );
};

export default Facet;
