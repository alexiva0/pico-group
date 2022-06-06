import React from 'react';
import cnCreate from 'utils/cnCreate';
import ChipsPanel from 'components/ChipsPanel/ChipsPanel';
import { press, IRelease } from 'content/news-press/press';
import './Press.css';

const cn = cnCreate('press');
const Press: React.FC = () => {
  const renderYear = (year: number, arr: IRelease[], i: number) => (
    <div className={cn('year')} key={i * year}>
      <h4 className={cn('title')}>{year}</h4>
      <div className={cn('releases')}>
        {arr.map(({ date, text }: IRelease, i: number) => (
          <div className={cn('item')} key={i + date}>
            <p className={cn('date')}>{date}</p>
            <div className={cn('text')}>{text()}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const chipsData = press.map(({ year, releases }, i) => ({
    title: year,
    content: renderYear(year, releases, i)
  }));

  const chipsDataWithAllYears = [{
    title: 'All years',
    content: press.map(({ year, releases }, i) => renderYear(year, releases, i))
  }, ...chipsData];

  return (
    <div className={cn()}>
      <ChipsPanel data={chipsDataWithAllYears} />
    </div>
  );
};

export default Press;
