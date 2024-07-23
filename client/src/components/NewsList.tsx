import React from 'react';
import NewsItem from './NewsItem';

interface Article {
  title: string;
  source: { name: string };
  publishedAt: string;
  summary: string;
}

interface NewsListProps {
  articles: Article[];
}


const NewsList: React.FC<NewsListProps> = ({ articles }) => {
  return (
    <div className="space-y-4">
      {(articles.length > 0) ? articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      )) : <h4 className='text-center'>Search a trending keyword that comes to your mind...</h4>}
    </div>
  );
};

export default NewsList;
