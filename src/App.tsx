import React, { useState } from "react";
import { FaFilter, FaSpinner, FaTimes, FaTimesCircle } from "react-icons/fa";
import { useAnswers } from "yext-answers-react";
import Facets from "./Facets";
import Modal from "./Modal";
import Nav from "./Nav";
import ProductGrid from "./ProductGrid";
import ProductOverlayCard from "./ProductOverlayCard";
import ResultsSummary from "./ResultsSummary";
import { Product } from "./types";
import { useCart } from "./useCart";

function App() {
  const [quickLookProduct, setQuickLookProduct] = useState<Product | null>(
    null
  );
  const [showingMobileFilters, setShowingMobileFilters] = useState(false);

  const { shoppingCart, addProductToCart } = useCart();
  const {
    state: { verticalresults, lastSearchedTerm, loading },
    actions: { runSearch },
  } = useAnswers();

  return (
    <div className="mb-12 relative font-SourceSansPro">
      <Nav shoppingCart={shoppingCart} />
      <div className="flex items-start">
        <div className="w-80 xl:w-96 sticky top-0 max-h-screen overflow-y-auto pb-12 hidden md:block">
          {lastSearchedTerm.length > 0 && (
            <div className="px-4 mt-5 flex items-center group">
              <div className="font-medium">{lastSearchedTerm} </div>

              {!loading && (
                <>
                  <div className="ml-1">
                    ({verticalresults?.resultsCount.toLocaleString()})
                  </div>
                  <div className="flex-grow"></div>
                  <div>
                    <FaTimesCircle
                      className="opacity-0 group-hover:opacity-100 text-gray-500 cursor-pointer hover:text-gray-600 bg-gray-100"
                      onClick={() => {
                        runSearch("");
                      }}
                    />
                  </div>
                </>
              )}
              {loading && (
                <>
                  <div className="flex-grow"></div>
                  <div className="ml-1">
                    <FaSpinner className="animate-spin text-gray-500" />
                  </div>
                </>
              )}
            </div>
          )}
          <Facets />
        </div>
        {verticalresults && (
          <div className="p-4 flex-grow">
            <ResultsSummary
              onToggleFilters={() => setShowingMobileFilters((e) => !e)}
            />
            <ProductGrid
              onAddToCart={addProductToCart}
              onQuickLook={(p) => setQuickLookProduct(p)}
            />
          </div>
        )}
      </div>
      {showingMobileFilters && (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-white z-50 flex flex-col">
          <div className="pt-4 px-4 text-lg font-light flex items-center">
            <FaFilter className="text-gray-600 mr-2" />
            Filters
            <div className="flex-grow"></div>
            <button
              className="p-4 text-gray-400 -m-4"
              onClick={() => setShowingMobileFilters(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto">
            <Facets />
          </div>
          <button
            className="m-2 bg-gray-800 text-white p-4 text-center"
            onClick={() => setShowingMobileFilters(false)}
          >
            Show {verticalresults?.resultsCount} products
          </button>
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
      <div className="fixed right-0 bottom-0 border-l border-t bg-white z-50 text-xs text-gray-500 p-4 w-48">
        <div>
          This is an example React application built on top of{" "}
          <a
            href="https://www.yext.com/products/answers"
            rel="noreferrer"
            target="_blank"
            className="underline"
          >
            Yext Answers
          </a>
          .{" "}
          <a
            href="https://github.com/Mxs2019/answers-product-search-core"
            rel="noreferrer"
            target="_blank"
            className="underline"
          >
            View the code on github
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
