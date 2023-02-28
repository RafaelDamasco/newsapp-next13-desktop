export default function sortNewsByImage(news: NewsResponse) {
  const newsWithImage = news.data.filter((items) => items.image !== null);
  const newsWithoutImage = news.data.filter((items) => items.image === null);

  const sortedNewsResponse = {
    ...news,
    data: [...newsWithImage, ...newsWithoutImage],
  };

  return sortedNewsResponse;
}
