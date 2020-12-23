import React from "react";
import ProductGrid from "./ProductGrid";
import ResultsSummary from "./ResultsSummary";
import { useAnswersStore } from "./store/useAnswersStore";
import { Product } from "./types";

type Props = {
  //Insert Props Here
  addProductToCart: (product: Product) => void;
  setQuickLookProduct: (product: Product) => void;
};

const Results: React.FC<Props> = ({
  addProductToCart,
  setQuickLookProduct,
}) => {
  const {
    state: { verticalresults, entities: products },
  } = useAnswersStore();

  if (!verticalresults) return null;
  return (
    <div className="p-4 flex-grow">
      <ResultsSummary />
      <ProductGrid
        onAddToCart={addProductToCart}
        onQuickLook={(p) => setQuickLookProduct(p)}
      />
    </div>
  );
};

export default Results;
