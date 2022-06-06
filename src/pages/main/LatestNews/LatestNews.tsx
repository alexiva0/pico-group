import React from 'react';
import cnCreate from 'utils/cnCreate';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import ContentArea from 'components/ContentArea/ContentArea';
import Tile from 'pages/main/Tile/Tile';
import { newsData, INews } from 'content/news-press/news';
import './LatestNews.css';

const cn = cnCreate('latest-news');
const LatestNews: React.FC = () => {
  const flattenNewsData = newsData.reduce((a, b) => [...a, ...b.news], [] as INews[]);
  const shortenNewsData = flattenNewsData.slice(0, 4);

  return (
    <div className={cn()}>
      <ContentArea>
        <div className={cn('inner')}>
          <a href="/news-press/news" className={cn('head')}>
            <h2 className={cn('title')}>
              <span className={cn('text', { original: true })}>Latest News</span>
              <span className={cn('text', { hover: true })}>All News</span>
            </h2>
            <svg width="30" height="30" viewBox="0 0 30 30" className={cn('arrow-icon')}>
              <path d="M17.6895 5.27573C17.29 4.89523 16.6565 4.91023 16.276 5.31023C15.895 5.71023 15.911 6.34323 16.3105 6.72423L23.9815 13.9997L4 13.9997C3.448 13.9997 3 14.4477 3 14.9997C3 15.5517 3.448 15.9997 4 15.9997L23.9495 15.9997L16.3105 23.2757C15.9105 23.6567 15.895 24.2897 16.276 24.6897C16.4725 24.8957 16.736 24.9997 17 24.9997C17.248 24.9997 17.496 24.9082 17.6895 24.7237L26.414 16.4137C26.792 16.0362 27 15.5342 27 14.9997C27 14.4652 26.792 13.9632 26.3965 13.5687L17.6895 5.27573Z" fill="#E7E7E7"/>
            </svg>
          </a>
          <Grid>
            {shortenNewsData.map(({ date, title }: INews, index: number) => (
              <GridColumn all="3" tablet="6" key={title + index}>
                <Tile
                  date={date}
                  title={title}
                  linkHref={`/news-press/news/${index + 1}`}
                />
              </GridColumn>
            ))}
          </Grid>
        </div>
      </ContentArea>
    </div>
  );
};

export default LatestNews;
