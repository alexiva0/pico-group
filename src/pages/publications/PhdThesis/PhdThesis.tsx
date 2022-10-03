import React from 'react';
import cnCreate from 'utils/cnCreate';
import { IPhdThesis } from 'content/publications';
import './PhdThesis.css';

interface IPhdThesisProps {
  data: IPhdThesis,
};

const cn = cnCreate('phd-thesis');
const PhdThesis: React.FC<IPhdThesisProps> = ({ data }) => {
  const { title, linkText, linkHref } = data;

  return (
    <div className={cn()}>
      <div className={cn('person')}>
        <p className={cn('title')}>{title}</p>
        <a className={cn('link')} href={linkHref} target="_blank" rel="noreferrer">{linkText}</a>
      </div>
    </div>
  );
};

export default PhdThesis;
