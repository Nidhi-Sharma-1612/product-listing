"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useProductContext } from "../context/productState";
import { Product } from "../context/productContext";
import Loader from "./Loader";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { query, setQuery } = useProductContext();
  const [productList, setProductList] = useState<Product[]>([]);
  const { selectedCategory, setSelectedCategory } = useProductContext();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products`);
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error:", error);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    let filteredData = products;
    if (query && query !== "") {
      filteredData = filteredData.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(query.toString().toLowerCase());
      });
    }
    if (selectedCategory && selectedCategory !== "All") {
      filteredData = filteredData.filter((product) => {
        return (
          product.category?.toLowerCase() == selectedCategory.toLowerCase()
        );
      });
    }
    setProductList(filteredData);
  }, [query, selectedCategory, products]);

  return (
    <div>
      <div className="container pt-16px">
        {isLoading ? (
          <Loader />
        ) : (
          <h2 className="font-bold text-3xl pb-4 py-6 px-3 text-center mb-5">
            PRODUCTS
          </h2>
        )}

        <div className="grid grid-cols-1 place-items-centre sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10  min-h-screen">
          {productList.length > 0 ? (
            productList.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  img={item.image}
                  title={item.title}
                  desc={item.description}
                  rating={item.rating}
                  price={item.price}
                />
              );
            })
          ) : (
            <h2 className="text-center font-bold">
              {`No results for: ${query}`}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
