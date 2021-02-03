import classnames from "classnames";
import React, { useState } from "react";
import { FaCartPlus, FaSearchPlus, FaTimes } from "react-icons/fa";
import Select from 'react-select';
import { Product } from "./types";

type Props = {
  //Insert Props Here
  product: Product;
  onClose: () => void;
  addToCart: () => void;
};

const ProductOverlayCard = ({ product, onClose, addToCart }: Props) => {
  const { name, photoGallery, price, landingPageUrl, c_sizes } = product.rawData;

  const [selectedImageURL, setSelectedImageURL] = useState(
    photoGallery[0].image.url
  );
  const buttonClassName =
    "px-4 py-3  bg-gray-100 text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-200";
  const options:object = [];
  if (c_sizes) {
    for (var i in c_sizes) {
      const option = {};
      option["value"] = c_sizes[i]; option["label"] = c_sizes[i];
      options[i] = option;
    }
  }
  return (
    <div className="bg-white rounded shadow-xl relative overflow-hidden">
      <div
        className="text-gray-500 p-2 bg-gray-100 hover:bg-gray-200 absolute top-0 right-0 m-2 rounded cursor-pointer z-50"
        onClick={onClose}
      >
        <FaTimes />
      </div>
      <div className="p-4">
        <div className="flex mt-4">
            <div className="font-medium text-lg text-black">{name}</div>
            {price && price.value && (
                  <div className= "font-light text-lg">&nbsp;- ${price.value}</div>
                )}
        </div>
          {c_sizes && (
            <div className="mt-2 md:w-2/4">
                <Select
                  options={options}
                  placeholder= "Select a size"
                />
            </div>
          )}
        <div className="z-10 mb-4">
          <div className="flex items-center justify-center p-4 overflow-hidden">
            <img src={selectedImageURL} alt="Product" width="50%" height= "50%" />
          </div>
        </div>
        {photoGallery.length > 1 && (
          <div className="grid grid-cols-8">
            {photoGallery.map((i, j) => (
              <div
                key={j}
                className="px-2 flex items-center hover:opactiy-70"
                onMouseEnter={() => setSelectedImageURL(i.image.url)}
                onTouchStart={() => setSelectedImageURL(i.image.url)}
              >
                <div>
                  <img src={i.image.url} alt="" />
                </div>
              </div>
            ))}
          </div>
        )}
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
        <a href={landingPageUrl}>
          <div
            className={classnames(buttonClassName, "border-t border-gray-200")}
          >
            <FaSearchPlus className="mr-2" />
            View Details
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductOverlayCard;
