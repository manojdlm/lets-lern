import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search or filtering logic based on the search term and category
    console.log('Search term:', searchTerm);
    console.log('Selected category:', selectedCategory);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex gap-2 my-10 mx-20">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 px-20 py-2 rounded-md"
      />
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="border border-gray-300 px-4 py-2 rounded-md"
      >
        <option value="">All Categories</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
        {/* Add more category options as needed */}
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
