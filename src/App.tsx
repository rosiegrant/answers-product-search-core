import { provideCore } from "@yext/answers-core";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";
import Facet from "./Facet";
import Nav from "./Nav";
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
    toggleFacet,
    querySuggestions,
    entities: products,
  } = useAnswersVertical<Product>(answers, "products");

  const [shoppingCart, setShoppingCart] = useState<
    {
      quantity: number;
      product: Product;
    }[]
  >([]);

  const { addToast } = useToasts();

  const addProductToCard = (product: Product) => {
    setShoppingCart((cart) => {
      let added = false;

      const updatedCart = cart.map((p) => {
        if (p.product.id === product.id) {
          added = true;
          return {
            product,
            quantity: p.quantity + 1,
          };
        } else return p;
      });
      if (!added) {
        updatedCart.push({
          quantity: 1,
          product,
        });
      }
      return updatedCart;
    });
    addToast(`Added ${product.name} to cart`, {
      appearance: "success",
      autoDismiss: true,
    });
  };

  return (
    <div className="mb-12">
      <Nav shoppingCart={shoppingCart} />
      <div className="flex">
        <div className=" w-72 xl:w-80">
          <SearchBar
            runSearch={runSearch}
            placeholder="Search for glasses..."
            loading={loading}
            updateAutocomplete={updateAutocomplete}
            querySuggestions={querySuggestions}
          />
          <div className="flex flex-col px-4 pb-4 ">
            {facets &&
              facets.map((f) => (
                <div key={f.fieldId}>
                  <Facet
                    facet={f}
                    onSelectFacet={(o) =>
                      toggleFacet(f.displayName, o.displayName)
                    }
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="p-4 flex-grow">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm text-gray-500">
              Showing {results?.results.length} of {results?.resultsCount}{" "}
              glasses
            </div>
            <div className="text-gray-500 text-sm flex items-center hover:underline cursor-pointer">
              Sort By <FaChevronDown className="ml-2" />
            </div>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 ">
            {products.map((p, i) => {
              return (
                <ProductCard
                  key={p.id}
                  product={p}
                  showQuickLook={() => setQuickLookProduct(p)}
                  addToCart={() => addProductToCard(p)}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-center">
            <div className=" text-sm text-gray-500 px-4 py-1 hover:bg-gray-100 cursor-pointer rounded">
              Load more
            </div>
          </div>
        </div>
        {quickLookProduct && (
          <div>
            <div
              className="fixed left-0 right-0 top-0 bottom-0 bg-gray-400 opacity-40 z-40"
              onClick={() => setQuickLookProduct(null)}
            ></div>
            <div className="fixed left-0 right-0 top-0 bottom-0 z-50 flex items-center justify-center">
              <div className="w-1/2">
                <ProductOverlayCard
                  addToCart={() => {
                    addProductToCard(quickLookProduct);
                    setQuickLookProduct(null);
                  }}
                  product={quickLookProduct}
                  onClose={() => setQuickLookProduct(null)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
