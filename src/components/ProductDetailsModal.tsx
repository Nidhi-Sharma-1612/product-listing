import React, { MouseEventHandler, useEffect } from "react";
import Image from "next/image";
import StarRating from "./Ratings";

interface propsType {
  show: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
  img: string;
  title: string;
  description: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetailsModal: React.FC<propsType> = ({
  show,
  onClose,
  img,
  description,
  price,
  rating,
  title,
}) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg w-full">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="flex items-center">
            <Image
              src={img}
              alt={title}
              width={100}
              height={0}
              className="w-full h-48 object-contain mt-6"
            />
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <div className="flex items-center mb-4">
            <span className="text-lg font-bold mr-2">${price}</span>
            <div className="flex items-center">
              <StarRating rating={rating.rate} />
            </div>
          </div>
          <p className="text-gray-700 mb-4">{description}</p>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
