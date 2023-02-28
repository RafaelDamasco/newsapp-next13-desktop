import fetchNews from 'utils/fetchNews';
import NewsList from '../api/NewsList';

type SearchPageProps = {
  searchParams?: { term: string };
};
export default async function SearchPage({ searchParams }: SearchPageProps) {
  const news: NewsResponse = await fetchNews(
    'general',
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
}
