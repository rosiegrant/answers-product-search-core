import React from "react";
import { useAnswers } from "yext-answers-react";
import ColorFacet from "./ColorFacet";
import Facet from "./Facet";

type Props = {
  //Insert Props Here
};

const Facets: React.FC<Props> = ({}) => {
  const {
    state: { facets },
    actions: { toggleFacet },
  } = useAnswers();

  return (
    <div className="flex flex-col px-4 pb-4 mt-4">
      {facets &&
        facets.map((f) => (
          <div key={f.fieldId}>
            {f.fieldId !== "c_color" && (
              <Facet
                facet={f}
                onSelectFacet={(o) => toggleFacet(f.fieldId, o.displayName)}
              />
            )}
            {f.fieldId === "c_color" && (
              <ColorFacet
                facet={f}
                onSelectFacet={(o) => toggleFacet(f.fieldId, o.displayName)}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default Facets;
