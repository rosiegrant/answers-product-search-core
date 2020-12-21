import { provideCore } from "@yext/answers-core";
import React, { useState } from "react";
import { FaChevronDown, FaShoppingCart } from "react-icons/fa";
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

  const [showingCart, setShowingCart] = useState(false);

  const [addToCartBanner, setAddToCartBanner] = useState<string>();

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
    setAddToCartBanner(`Added ${product.name} to cart`);
    setTimeout(() => {
      setAddToCartBanner(undefined);
    }, 5000);
  };

  return (
    <div className="mb-12">
      <div className="border-b flex justify-between items-stretch ">
        <div className="text-xl font-light px-4 text-green-700 flex items-center">
          Seaglass
        </div>
        <div className="flex items-center text-gray-700 px-4">
          <div className="px-4 py-2 hover:underline cursor-pointer">
            Products
          </div>
          <div className="px-4 py-2 hover:underline cursor-pointer">
            Locations
          </div>
          <div className="px-4 py-2 hover:underline cursor-pointer">
            Support
          </div>
          <div className="px-4 py-2 hover:underline cursor-pointer">
            About Us
          </div>
        </div>
        <div
          className="border-l p-4 text-gray-700 flex items-center"
          onMouseEnter={() => setShowingCart(true)}
          onMouseLeave={() => setShowingCart(false)}
        >
          {addToCartBanner && <div className="mr-4">{addToCartBanner}</div>}
          <FaShoppingCart />
          {shoppingCart.length > 0 && (
            <div className="absolute right-0 top-0 m-2 p-1 h-4 w-4 flex items-center rounded-full bg-gray-700 text-gray-100 text-xs">
              {shoppingCart.length}
            </div>
          )}
          {showingCart && (
            <div className="flex flex-col absolute top-16 right-0 mr-2 rounded bg-white border shadow-lg z-50">
              {shoppingCart.map((c) => (
                <div className="border-b px-4 py-2 w-64 flex items-center">
                  <div className="w-24 mr-4">
                    <div>
                      <img
                        src={c.product.photoGallery[2].image.sourceUrl}
                        width="100%"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">{c.product.name}</div>
                    <div className="text-gray-500 text-sm">
                      {c.quantity} x ${c.product.c_price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
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
                <Facet
                  key={f.fieldId}
                  facet={f}
                  onSelectFacet={(o) =>
                    toggleFacet(f.displayName, o.displayName)
                  }
                />
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
