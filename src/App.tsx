import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { FaSpinner } from "react-icons/fa";
import Facets from "./Facets";
import Modal from "./Modal";
import Nav from "./Nav";
import ProductOverlayCard from "./ProductOverlayCard";
import Results from "./Results";
import { useAnswersStore } from "./store/useAnswersStore";
import { Product } from "./types";
import { useCart } from "./useCart";

function App() {
  const [quickLookProduct, setQuickLookProduct] = useState<Product | null>(
    null
  );

  const { shoppingCart, addProductToCart } = useCart();
  const {
    state,
    actions: { runSearch },
  } = useAnswersStore();
  useEffect(() => {
    runSearch();
  }, []);

  return (
    <div className="mb-12 relative">
      <Nav shoppingCart={shoppingCart} />
      <div className="flex items-start">
        <div className="w-64 xl:w-72 sticky top-0 max-h-screen overflow-y-auto pb-12 hidden md:block">
          {state.query.length > 0 && (
            <div className="px-4 mt-5 flex items-center">
              <div className="font-medium">{state.query} </div>

              {!state.loading && (
                <div className="ml-1">
                  ({state.verticalresults?.resultsCount.toLocaleString()})
                </div>
              )}
              {state.loading && (
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
        <Results
          addProductToCart={addProductToCart}
          setQuickLookProduct={setQuickLookProduct}
        />
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
  );
}

export default App;
