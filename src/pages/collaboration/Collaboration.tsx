import React from 'react';
import cnCreate from 'utils/cnCreate';
import ContentArea from 'components/ContentArea/ContentArea';
import { collaborations } from 'content/collaboration';
import './Collaboration.css';

const cn = cnCreate('collaboration');
const Collaboration: React.FC = () => {
  const { text, list } = collaborations;

  return (
    <div className={cn()}>
      <ContentArea>
        <div className={cn('inner')}>
          <h1 className={cn('title')}>Collaboration</h1>
          <p className={cn('text')}>{text}</p>
          {list.map(({ linkText, linkHref, location, flag }, i) => (
            <div className={cn('item')} key={i + linkText}>
              <a className={cn('link')} target="_blank" rel="noreferrer" href={linkHref}>{linkText}</a>
              <div className={cn('wrap')}>
                <div className={cn('flag')}>{flag()}</div>
                <p className={cn('location')}>{location}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentArea>
    </div>
  );
};

export default Collaboration;
