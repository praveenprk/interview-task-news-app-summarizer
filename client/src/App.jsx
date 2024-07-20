// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import NewsList from './components/NewsList';

const App = () => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async (keyword) => {
    try {
      const response = await axios.get(`http://localhost:5250/news?keyword=${keyword}`);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news", error);
    }
  };

  return (
    <div>
      <h1>AI-Powered News Search Application</h1>
      <SearchBar onSearch={fetchNews} />
      <NewsList articles={articles} />
    </div>
  );
};

export default App;
