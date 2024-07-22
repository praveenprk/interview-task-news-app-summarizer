import React from 'react';
import { PublishedAt, Source, Summary } from '../utilities/Helper';

const NewsItem = ({ article }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{article.title}</h2>
      <p className="text-gray-500">
       <Source />{article.source.name} - <PublishedAt/>{new Date(article.publishedAt).toLocaleDateString()}</p>
      <p className="mt-2"><Summary />{article.summary}</p>
    </div>
  );
};

export default NewsItem;
