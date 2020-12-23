import React from "react";
import FlipMove from "react-flip-move";
import { FaSpinner } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./ProductCard";
import { useAnswersStore } from "./store/useAnswersStore";
import { Product } from "./types";

type Props = {
  //Insert Props Here
  onQuickLook: (product: Product) => void;
  onAddToCart: (product: Product) => void;
};

const ProductGrid: React.FC<Props> = ({ onQuickLook, onAddToCart }) => {
  const {
    state: { verticalresults, entities: products },
    actions: { loadMore },
  } = useAnswersStore();

  return (
    <InfiniteScroll
      className="overflow-x-auto"
      style={{ overflow: "visible" }}
      hasMore={verticalresults!.resultsCount > products.length}
      next={loadMore}
      dataLength={products.length}
      endMessage={
        <div className="mt-12 mb-4 text-center text-gray-500 font-light text-sm">
          that's all...
        </div>
      }
      loader={
        <div className="h-12 flex items-center justify-center">
          <FaSpinner className="animate-spin text-gray-500" />
        </div>
      }
    >
      <FlipMove className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
        {products.map((p, i) => {
          return (
            <div key={p.id} className="overflow-visible z-40">
              <ProductCard
                product={p}
                showQuickLook={() => onQuickLook(p)}
                addToCart={() => onAddToCart(p)}
              />
            </div>
          );
        })}
      </FlipMove>
    </InfiniteScroll>
  );
};

export default ProductGrid;
