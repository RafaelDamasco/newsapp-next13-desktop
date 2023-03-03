import NewsList from '@/app/NewsList';
import { categories } from '../../../../constants';
import fetchNews from 'utils/fetchNews';

type NewsCategoryPageProps = {
  params: { category: Category };
};
export default async function NewsCategoryPage({
  params: { category },
}: NewsCategoryPageProps) {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className="hearderTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

// NEXTJS WILL PRE-BUILD THE THESE PAGES
// localhost:3000/news/business
// localhost:3000/news/general
// localhost:3000/news/sports
// ...
export async function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}
