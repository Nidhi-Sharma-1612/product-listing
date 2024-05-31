"use client";

import React, { ReactNode, useContext, useState } from "react";
import ProductContext from "./productContext";

interface Product {
  id: number;
  name: string;
  price: number;
  title: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductState: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [query, setQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  return (
    <ProductContext.Provider
      value={{ query, setQuery, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export default ProductState;
