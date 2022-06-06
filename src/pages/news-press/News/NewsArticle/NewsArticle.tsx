import React from 'react';
import { useParams } from 'react-router-dom';
import { newsData, INews } from 'content/news-press/news';
import cnCreate from 'utils/cnCreate';
import './NewsArticle.css';

const cn = cnCreate('news-article');
const NewsArticle: React.FC = () => {
  const { id: articleId } = useParams<{ id: string }>();

  const flattenNewsData = newsData.reduce((a, b) => [...a, ...b.news], [] as INews[]);
  const content = flattenNewsData.find(({ id }) => id === Number(articleId));

  return (
    <div className={cn()}>
      <a href="/news-press/news" className={cn('back')}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className={cn('icon')}>
          <path opacity="0.9" d="M12.3105 24.7243C12.71 25.1048 13.3435 25.0898 13.724 24.6898C14.105 24.2898 14.089 23.6568 13.6895 23.2758L6.0185 16.0003L26 16.0003C26.552 16.0003 27 15.5523 27 15.0003C27 14.4483 26.552 14.0003 26 14.0003L6.0505 14.0003L13.6895 6.72427C14.0895 6.34327 14.105 5.71027 13.724 5.31027C13.5275 5.10427 13.264 5.00027 13 5.00027C12.752 5.00027 12.504 5.09177 12.3105 5.27627L3.586 13.5863C3.208 13.9638 3 14.4658 3 15.0003C3 15.5348 3.208 16.0368 3.6035 16.4313L12.3105 24.7243Z" fill="#E7E7E7"/>
        </svg>
        Back to all news
      </a>
      <div className={cn('container')}>
        <h3 className={cn('title')}>{content?.title}</h3>
        {content?.article()}
      </div>

    </div>
  );
};

export default NewsArticle;
