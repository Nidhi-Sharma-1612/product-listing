"use client";

import React from "react";
import { BsSearch } from "react-icons/bs";
import { useProductContext } from "../context/productState";
import Filter from "./Filter";

const Header = () => {
  const { query, setQuery } = useProductContext();
  const { selectedCategory, setSelectedCategory } = useProductContext();

  return (
    <div className="border-b border-red-200 py-6 px-3 bg-gray-800">
      <div className="container grid grid-cols-1 sm:grid-cols-3 justify-between items-center">
        <div className="text-2xl sm:text-center sm:text-4xl pb-4 sm:pb-0 text-white justify-self-center sm:justify-self-start font-bold">
          FLIPMART
        </div>
        <div className="mt-4 sm:mt-0 justify-self-center sm:justify-self-start w-full sm:w-auto md:w-[90%] relative">
          <input
            className="border-gray-200 border p-2 pl-4 pr-10 sm:pl-6 py-3 rounded-lg w-full"
            type="text"
            placeholder="Search for products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
            size={20}
          />
        </div>
        <div className="mt-4 sm:mt-0 sm:justify-self-end w-full sm:w-auto">
          <Filter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
