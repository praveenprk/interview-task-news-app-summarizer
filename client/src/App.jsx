import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import NewsList from './components/NewsList';
import Loader from './components/Loader';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (keyword) => {
    if (keyword.trim() === '') {
      setArticles([]);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5250/news?keyword=${keyword}`);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news", error);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">AI-Powered News Search Application</h1>
      <SearchBar onSearch={fetchNews} />
      {loading ? <Loader /> : <NewsList articles={articles} />}
    </div>
  );
};

export default App;
