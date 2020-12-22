import classnames from "classnames";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

type Props = {
  //Insert Props Here
  children: React.ReactNode;
  name: string;
  count: number;
};

const FacetContainer: React.FC<Props> = ({ children, name, count }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className=" py-2 mb-3">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded((e) => !e)}
      >
        <div className="text-black font-medium text-sm flex itesm-center">
          <div>{name}</div>
          {count > 0 && <div className="ml-1">({count})</div>}
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
      {expanded && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default FacetContainer;
