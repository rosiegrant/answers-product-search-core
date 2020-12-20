import { provideCore } from "@yext/answers-core";
import React, { useState } from "react";
import Facet from "./Facet";
import ProductCard from "./ProductCard";
import ProductOverlayCard from "./ProductOverlayCard";
import SearchBar from "./SearchBar";
import { Product } from "./types";
import { useAnswersVertical } from "./useAnswers";

const answers = provideCore({
  apiKey: "7bce922a5847aff36dc33345921ba700",
  experienceKey: "dtc_demo",
  experienceVersion: "PRODUCTION",
  locale: "en",
});

function App() {
  const [quickLookProduct, setQuickLookProduct] = useState<Product | null>(
    null
  );
  const {
    runSearch,
    setQuery,
    query,
    loading,
    results,
    facets,
    updateAutocomplete,
    querySuggestions,
    entities: products,
  } = useAnswersVertical<Product>(answers, "products");

  console.log(facets);

  return (
    <div className="flex">
      <div className="sticky top-0 w-72">
        <SearchBar
          runSearch={runSearch}
          placeholder="Search for glasses..."
          loading={loading}
          updateAutocomplete={updateAutocomplete}
          querySuggestions={querySuggestions}
        />
        <div className="flex flex-col divide-y px-4 pb-4 ">
          {facets.map((f) => (
            <Facet key={f.fieldId} facet={f} />
          ))}
        </div>
      </div>
      <div className="p-4 flex-grow">
        {/* <div>
        <div>Sort By</div>
      </div> */}
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 ">
          {products.map((p, i) => {
            return (
              <ProductCard
                key={p.id}
                product={p}
                showQuickLook={() => setQuickLookProduct(p)}
              />
            );
          })}
        </div>
      </div>
      {quickLookProduct && (
        <div>
          <div
            className="absolute left-0 right-0 top-0 bottom-0 bg-gray-400 opacity-40 z-40"
            onClick={() => setQuickLookProduct(null)}
          ></div>
          <div className="absolute left-0 right-0 top-0 bottom-0 z-50 flex items-center justify-center">
            <div className="w-1/2">
              <ProductOverlayCard
                product={quickLookProduct}
                onClose={() => setQuickLookProduct(null)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
