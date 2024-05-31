import React, { useState } from "react";

interface PropsType {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const Filter: React.FC<PropsType> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    "All",
    "Men's Clothing",
    "Women's Clothing",
    "Jewelery",
    "Electronics",
  ];

  const handleCategorySelect = (category: string) => {
    onSelectCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div className="relative inline-block text-left w-full sm:w-auto">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {selectedCategory}
            <svg
              className={`-mr-1 ml-2 h-5 w-5 transform ${
                isOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-full sm:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              {categories.map((category) => (
                <a
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`block px-4 py-2 text-sm ${
                    selectedCategory === category
                      ? "bg-indigo-500 text-white"
                      : "text-gray-700"
                  } cursor-pointer hover:bg-indigo-500 hover:text-white`}
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
