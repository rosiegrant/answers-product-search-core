import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import SearchBar from "./SearchBar";
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
      <div className="flex justify-between items-stretch h-14 bg-indigo-900">
        <a className="text-white no-underline hover:text-white hover:no-underline flex items-center" href="/#">
            <span className="text-2xl pl-4">H.Blue</span>
          </a>
        <div className="items-center text-gray-700 px-4 hidden md:flex font-light">
          <div className="cursor-pointer hover:text-gray-200 hover:text-underline py-2 px-4 text-white">Products</div>
          <div className="cursor-pointer hover:text-gray-200 hover:text-underline py-2 px-4 text-white">
            Locations
          </div>
          <div className="cursor-pointer hover:text-gray-200 hover:text-underline py-2 px-4 text-white">Support</div>
          <div className="cursor-pointer hover:text-gray-200 hover:text-underline py-2 px-4 text-white">About Us</div>
        </div>
        <div className="flex">
          <SearchBar placeholder="Search for products..." />
          <div
            className="p-4 text-white flex items-center"
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
              <div className="flex flex-col absolute top-16 right-0 mr-2 rounded bg-white border shadow-lg z-50 text-white ">
                {shoppingCart.map((c) => (
                  <div className="border-b px-4 py-2 w-64 flex items-center">
                    <div className="w-24 mr-4">
                      <div>
                        <img
                          src={c.product.rawData.photoGallery[2].image.sourceUrl}
                          width="100%"
                          alt="Cart Item"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{c.product.rawData.name}</div>
                      <div className="text-gray-500 text-sm">
                        {c.quantity} x ${c.product.rawData.c_price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );

};

export default Nav;
