import { Facet as FacetType, FacetOption } from "@yext/answers-core";
import React from "react";
import FlipMove from "react-flip-move";
import { MdCheck } from "react-icons/md";
import stc from "string-to-color";
import FacetContainer from "./FacetContainer";

type Props = {
  //Insert Props Here
  facet: FacetType;
  maxOptions?: number;
  onSelectFacet: (option: FacetOption) => void;
};

const ColorFacet: React.FC<Props> = ({
  facet,
  maxOptions = 10,
  onSelectFacet,
}) => {
  const filteredOptions = facet.options
    .filter((o, i) => i < maxOptions)
    .sort((a, b) => {
      return a.displayName.localeCompare(b.displayName);
    });

  return (
    <FacetContainer
      name={facet.displayName}
      count={facet.options.filter((o) => o.selected).length}
    >
      <FlipMove className="grid grid-cols-3">
        {filteredOptions.map((o) => (
          <div
            className="font-light flex flex-col items-center mb-3 group cursor-pointer hover:opacity-75"
            key={o.displayName}
            onClick={() => onSelectFacet(o)}
          >
            {o.displayName !== "White" && (<div
              className="h-6 w-6 rounded-full mb-1 group-hover:opactiy-75 flex items-center justify-center"
              style={{ backgroundColor: stc(o.displayName) }}
            >
              {o.selected && <MdCheck className="text-white" />}
              {/* {!o.selected && (
                <div className="text-white text-xs opacity-60">{o.count}</div>
              )} */}
            </div>
            )}
            {o.displayName === "White" && (<div
              className="h-6 w-6 rounded-full mb-1 group-hover:opactiy-75 flex items-center justify-center border border-solid border-gray-500"
              style={{ backgroundColor: "white"}}
            >
              {o.selected && <MdCheck className="text-white" />}
              {/* {!o.selected && (
                <div className="text-white text-xs opacity-60">{o.count}</div>
              )} */}
            </div>)}

            <div className="text-xs text-light text-center text-gray-600">
              {o.displayName} ({o.count})
            </div>
          </div>
        ))}
      </FlipMove>
    </FacetContainer>
  );
};

export default ColorFacet;
