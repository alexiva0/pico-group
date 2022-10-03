import React from 'react';
import cnCreate from 'utils/cnCreate';
import { useRouteMatch, NavLink } from 'react-router-dom';
import ChipsPanel from 'components/ChipsPanel/ChipsPanel';
import { newsData, INews } from 'content/news-press/news';
import './News.css';

const cn = cnCreate('news');
const News: React.FC = () => {
  const { path } = useRouteMatch();

  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };

  const renderYear = (year: number, arr: INews[], i: number) => (
    <div className={cn('year')} key={i * year}>
      <h3 className={cn('title')}>{year}</h3>
      <div className={cn('releases')}>
        {arr.map(({ date, id, title }: INews, i: number) => (
          <div className={cn('item')} key={i + date}>
            <p className={cn('date')}>{date}</p>
            <NavLink
              className={cn('title')}
              to={`${path}/${id}`}
              onClick={handleNavClick}
            >
              {title}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );

  const chipsData = newsData.map(({ year, news }, i) => ({
    title: year,
    content: renderYear(year, news, i)
  }));

  const chipsDataWithAllYears = [{
    title: 'All years',
    content: newsData.map(({ year, news }, i) => renderYear(year, news, i))
  }, ...chipsData];

  return (
    <div className={cn()}>
      <ChipsPanel data={chipsDataWithAllYears} />
    </div>
  );
};

export default News;
