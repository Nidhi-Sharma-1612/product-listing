import { createContext } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  title: string;
  description: string;
  image: string;
  category?: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductContextType {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export default ProductContext;
