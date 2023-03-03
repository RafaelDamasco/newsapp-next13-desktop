import React from 'react';
import Article from './Article';

type NewsListProps = {
  news: NewsResponse;
};
export default function NewsList({ news }: NewsListProps) {
  return (
    <main className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3">
      {news.data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
}
