import React from 'react';

const NewsItem = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
      <p>{article.summary}</p>
    </div>
  );
};

export default NewsItem;
