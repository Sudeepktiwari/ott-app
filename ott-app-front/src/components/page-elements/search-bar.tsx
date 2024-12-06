import React, { useState } from "react";

const SearchBar = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFocus = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300); // Reset after animation duration
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type in the name to search"
        id="search-bar"
        className={` search-bar border-4 border-black p-2 rounded-full text-black w-full h-10 m-2 ${
          isAnimating ? "animate-pop" : ""
        }`}
        onFocus={handleFocus}
      />
    </div>
  );
};

export default SearchBar;
