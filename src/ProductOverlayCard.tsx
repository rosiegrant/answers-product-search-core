import classnames from "classnames";
import React, { useState } from "react";
import { FaCartPlus, FaSearchPlus, FaTimes } from "react-icons/fa";
import { Product } from "./types";

type Props = {
  //Insert Props Here
  product: Product;
  onClose: () => void;
  addToCart: () => void;
};

const ProductOverlayCard = ({ product, onClose, addToCart }: Props) => {
  const { name, c_shape, c_material, photoGallery, c_price } = product.rawData;

  const [selectedImageURL, setSelectedImageURL] = useState(
    photoGallery[2].image.url
  );
  const buttonClassName =
    "px-4 py-3  bg-gray-100 text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-200";
  return (
    <div className="bg-white rounded shadow-xl relative overflow-hidden">
      <div
        className="text-gray-500 p-2 hover:bg-gray-100 absolute top-0 right-0 m-2 rounded cursor-pointer z-50"
        onClick={onClose}
      >
        <FaTimes />
      </div>
      <div className="p-4">
        <div className=" aspect-w-4 aspect-h-2 z-10 mb-2">
          <div className="flex items-center  p-4 overflow-hidden">
            <img src={selectedImageURL} alt="" width="100%" />
          </div>
        </div>
        <div className="grid grid-cols-6">
          {photoGallery.map((i, j) => (
            <div
              key={j}
              className="px-2 flex items-center hover:opactiy-70"
              onMouseEnter={() => setSelectedImageURL(i.image.url)}
              onTouchStart={() => setSelectedImageURL(i.image.url)}
            >
              <div>
                <img src={i.image.url} />
              </div>
            </div>
          ))}
        </div>
        <div className="font-medium text-lg text-black mt-4">{name}</div>
        <div className="text-gray-500 font-light text-sm">
          {c_material}, {c_shape}
        </div>
        <div className="text-gray-500 font-light text-sm">2 colors</div>
        <div className=" font-medium mt-2 text-sm">${c_price}</div>
      </div>
      <div className="grid grid-cols-2">
        <div
          onClick={addToCart}
          className={classnames(
            buttonClassName,
            " border-t border-r border-gray-200"
          )}
        >
          <FaCartPlus className="mr-2" />
          Add To Cart
        </div>
        <div
          className={classnames(buttonClassName, "border-t border-gray-200")}
        >
          <FaSearchPlus className="mr-2" />
          View Details
        </div>
      </div>
    </div>
  );
};

export default ProductOverlayCard;
