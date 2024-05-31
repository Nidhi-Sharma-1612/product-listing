import Image from "next/image";
import React, { useState } from "react";
import { truncateText } from "../utils.ts/truncate";
import ProductDetailsModal from "./ProductDetailsModal";
import Rating from "./Ratings";

interface propsType {
  img: string;
  title: string;
  desc: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  rating,
  price,
  desc,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="px-4 py-4 border border-gray-200 rounded-xl cursor-pointer shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 flex flex-col">
      <div className="mb-2 min-h-[285px] flex items-center justify-center">
        <div className="w-64 h-50 min-h-50">
          <Image
            src={img}
            alt={title}
            className="w-full h-48 object-contain hover:scale-105"
            width={100}
            height={0}
          />
        </div>
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">
          {truncateText(title, 50)}
        </h2>
        <Rating rating={rating.rate} />
      </div>

      <div className="mt-2 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-500">${price}</span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
          onClick={() => setShowModal(true)}
        >
          View Details
        </button>
      </div>

      <ProductDetailsModal
        img={img}
        description={desc}
        price={price}
        rating={rating}
        title={title}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default ProductCard;
