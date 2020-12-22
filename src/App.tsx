import React, { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { answersCore } from "./answers.config";
import Facets from "./Facets";
import Modal from "./Modal";
import Nav from "./Nav";
import ProductGrid from "./ProductGrid";
import ProductOverlayCard from "./ProductOverlayCard";
import ResultsSummary from "./ResultsSummary";
import AnswersStore from "./store/AnswersStore";
import { Product } from "./types";
import { useAnswersVertical } from "./useAnswers";
import { useCart } from "./useCart";

function App() {
  const [quickLookProduct, setQuickLookProduct] = useState<Product | null>(
    null
  );
  const {
    runSearch,
    loadMore,
    loading,
    results,
    facets,
    updateAutocomplete,
    toggleFacet,
    querySuggestions,
    entities: products,
  } = useAnswersVertical<Product>(answersCore, "products");

  const { shoppingCart, addProductToCart } = useCart();

  return (
    <AnswersStore>
      <div className="mb-12 relative">
        <Nav
          shoppingCart={shoppingCart}
          querySuggestions={querySuggestions}
          updateAutocomplete={updateAutocomplete}
          runSearch={runSearch}
          loading={loading}
        />
        <div className="flex items-start">
          <div className="w-64 xl:w-72 sticky top-0 max-h-screen overflow-y-auto pb-12 hidden md:block">
            <Facets facets={facets} toggleFacet={toggleFacet} />
          </div>
          {results && (
            <div className="p-4 flex-grow">
              <ResultsSummary
                totalResults={results!.resultsCount}
                visibleResults={products.length}
              />
              <ProductGrid
                products={products}
                results={results}
                loadMore={loadMore}
                onAddToCart={addProductToCart}
                onQuickLook={(p) => setQuickLookProduct(p)}
              />
            </div>
          )}
          {quickLookProduct && (
            <Modal>
              <ProductOverlayCard
                addToCart={() => {
                  addProductToCart(quickLookProduct);
                  setQuickLookProduct(null);
                }}
                product={quickLookProduct}
                onClose={() => setQuickLookProduct(null)}
              />
            </Modal>
          )}
        </div>
      </div>
    </AnswersStore>
  );
}

export default App;
