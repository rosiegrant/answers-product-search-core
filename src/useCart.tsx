import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";
import { Product } from "./types";
export const useCart = () => {
  const [shoppingCart, setShoppingCart] = useState<
    {
      quantity: number;
      product: Product;
    }[]
  >([]);

  const { addToast } = useToasts();

  const addProductToCart = (product: Product) => {
    setShoppingCart((cart) => {
      let added = false;

      const updatedCart = cart.map((p) => {
        if (p.product.rawData.id === product.rawData.id) {
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
    addToast(
      <div className="py-2 px-4 flex items-center font-light bg-gray-600 text-white text-sm  shadow-sm z-50 rounded-sm mb-2 mr-4 mt-4">
        <FaCartPlus />
        <div className="ml-2">Added</div>
        <span className="font-medium ml-1">{product.rawData.name}</span>
        <div className="ml-1">to cart</div>
      </div>,
      {
        appearance: "success",
        autoDismiss: true,
      }
    );
  };

  return {
    shoppingCart,
    addProductToCart,
  };
};
