import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Product } from "./types";

type Props = {
  //Insert Props Here
  shoppingCart: {
    quantity: number;
    product: Product;
  }[];
};

const Nav: React.FC<Props> = ({ shoppingCart }) => {
  const [showingCart, setShowingCart] = useState(false);
  return (
    <div className="border-b flex justify-between items-stretch ">
      <div className="text-xl font-light px-4 text-green-700 flex items-center">
        Seaglass
      </div>
      <div className="flex items-center text-gray-700 px-4">
        <div className="px-4 py-2 hover:underline cursor-pointer">Products</div>
        <div className="px-4 py-2 hover:underline cursor-pointer">
          Locations
        </div>
        <div className="px-4 py-2 hover:underline cursor-pointer">Support</div>
        <div className="px-4 py-2 hover:underline cursor-pointer">About Us</div>
      </div>
      <div
        className="border-l p-4 text-gray-700 flex items-center"
        onMouseEnter={() => setShowingCart(true)}
        onMouseLeave={() => setShowingCart(false)}
      >
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
  );
};

export default Nav;
