import React from 'react';
import cnCreate from 'utils/cnCreate';
import './ContentArea.css';

export interface IContentAreaProps {
  className?: string | string[];
}

const cn = cnCreate('content-area');
const ContentArea: React.FC<IContentAreaProps> = ({ className, children }) => (
  <div className={cn('', className)}>
    <div className={cn('inner')}>
      {children}
    </div>
  </div>
);

export default ContentArea;
