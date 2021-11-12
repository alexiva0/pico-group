import React from 'react';
import cnCreate from 'utils/cnCreate';
import './ContentArea.css';

const cn = cnCreate('content-area');
const ContentArea: React.FC = ({ children }) => (
  <div className={cn()}>
    <div className={cn('inner')}>
      {children}
    </div>
  </div>
);

export default ContentArea;
