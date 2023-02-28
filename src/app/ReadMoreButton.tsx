'use client';

import { useRouter } from 'next/navigation';

type ReadMoreButtonProps = {
  article: Article;
};
export default function ReadMoreButton({ article }: ReadMoreButtonProps) {
  const router = useRouter();
  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    const url = `/article?${queryString}`;
    router.push(url);
  };
  return (
    <button
      onClick={handleClick}
      className="h-10 rounded-b-lg bg-orange-400 hover:bg-orange-500 dark:text-gray-900"
    >
      Read More
    </button>
  );
}
