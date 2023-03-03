import fetchNews from 'utils/fetchNews';
import { categories } from '../../constants';
import NewsList from './NewsList';
import response from 'response.json';
import Loading from './loading';

export default async function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(','));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
