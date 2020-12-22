import { Facet as FacetType } from "@yext/answers-core";
import React from "react";
import ColorFacet from "./ColorFacet";
import Facet from "./Facet";

type Props = {
  //Insert Props Here
  facets: FacetType[];
  toggleFacet: (facet: string, option: string) => void;
};

const Facets: React.FC<Props> = ({ facets, toggleFacet }) => {
  return (
    <div className="flex flex-col px-4 pb-4 mt-4">
      {facets &&
        facets.map((f) => (
          <div key={f.fieldId}>
            {f.fieldId !== "c_color" && (
              <Facet
                facet={f}
                onSelectFacet={(o) => toggleFacet(f.displayName, o.displayName)}
              />
            )}
            {f.fieldId === "c_color" && (
              <ColorFacet
                facet={f}
                onSelectFacet={(o) => toggleFacet(f.displayName, o.displayName)}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default Facets;
