import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <input
        className='border-solid border-2 border-sky-500 rounded-l-lg'
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search for news articles..."
      />
      <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
