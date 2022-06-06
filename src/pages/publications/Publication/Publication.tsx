import React, { Fragment } from 'react';
import cnCreate from 'utils/cnCreate';
import { IPublicationsList } from 'content/publications';
import './Publication.css';

interface IPublicationProps {
  data: IPublicationsList,
};

const cn = cnCreate('publication');
const Publication: React.FC<IPublicationProps> = ({ data }) => {
  const { participants, title, links } = data;

  return (
    <div className={cn()}>
      <p className={cn('participants')}>{participants}</p>
      <p className={cn('title')}>{title}</p>
      <div className={cn('links')}>
        {links.map(({ linkText, linkHref }, i) => (
          <Fragment key={linkHref + i}>
            <a
              className={cn('link')}
              href={linkHref}
              target="_blank"
              rel="noreferrer"
              dangerouslySetInnerHTML={{__html: linkText}}
            />
            {!(links.length - 1 === i) && <span>, </span>}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Publication;
