import React from 'react';
import cnCreate from 'utils/cnCreate';
import ChipsPanel from 'components/ChipsPanel/ChipsPanel';
import { guestbook, IGuestbookYearList } from 'content/people/people';
import './Guestbook.css';

const cn = cnCreate('guestbook');
const Guestbook: React.FC = () => {
  const { text, years } = guestbook;

  const renderYear = (year: number, arr: IGuestbookYearList[], i: number) => (
    <div className={cn('year')} key={i * year}>
      <h4 className={cn('title')}>{year}</h4>
      <div className={cn('releases')}>
        {arr.map(({ name, description, date }: IGuestbookYearList, i: number) => (
           <div className={cn('person')} key={i + name}>
              <p className={cn('date')}>{date}</p>
              <p className={cn('name')}>{name}</p>
              <p className={cn('description')}>{description}</p>
            </div>
        ))}
      </div>
    </div>
  );

  const chipsData = years.map(({ year, list }, i) => ({
    title: year,
    content: renderYear(year, list, i)
  }));

  const chipsDataWithAllYears = [{
    title: 'All years',
    content: years.map(({ year, list }, i) => renderYear(year, list, i))
  }, ...chipsData];

  return (
    <div className={cn()}>
      <p className={cn('text')} dangerouslySetInnerHTML={{__html: text}} />
      <ChipsPanel data={chipsDataWithAllYears} />
    </div>
  );
};

export default Guestbook;
