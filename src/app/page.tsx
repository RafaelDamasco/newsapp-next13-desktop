import fetchNews from 'utils/fetchNews';
import { categories } from '../../constants';
import NewsList from './api/NewsList';
import response from 'response.json';

export default async function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(','));


  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
