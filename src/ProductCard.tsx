import React, { useState } from "react";
import { FaCartPlus, FaSearchPlus } from "react-icons/fa";
import { Product } from "./types";

type Props = {
  //Insert Props Here
  product: Product;
  showQuickLook: () => void;
};

const ProductCard = ({ product, showQuickLook }: Props) => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div
      className="hover:shadow-xl hover:bg-white hover:z-30 hover:z-100 rounded cursor-pointer transform hover:scale-105 transition ease-in-out group overflow-hidden relative"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div className="p-4">
        <div className=" aspect-w-4 aspect-h-2">
          {product.photoGallery.length > 0 && (
            <div className="flex items-center  p-4">
              <img
                src={product.photoGallery[2].image.url}
                alt=""
                width="100%"
              />
            </div>
          )}
        </div>
        <div className="font-medium text-black mt-4">{product.name}</div>
        <div className="text-gray-500 font-light text-sm">
          {product.c_material}, {product.c_shape}
        </div>
        <div className="text-gray-500 font-light text-sm">2 colors</div>
        <div className=" font-medium mt-2 text-sm">${product.c_price}</div>
      </div>

      <div className="flex opacity-0 group-hover:opacity-100 text-gray-500 uppercase text-xs transition ease-in-out  justify-center">
        <div
          className="flex justify-center items-center bg-gray-100 hover:bg-gray-200 px-2 py-2 cursor-pointer flex-grow"
          onClick={showQuickLook}
        >
          <FaSearchPlus className="mr-2" />
          Look
        </div>
        <div className="flex justify-center items-center bg-gray-100 hover:bg-gray-200 px-2 py-2 cursor-pointer flex-grow">
          <FaCartPlus className="mr-2" />
          Cart
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
