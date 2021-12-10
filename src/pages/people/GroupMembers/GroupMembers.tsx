import React from 'react';
import cnCreate from 'utils/cnCreate';
import { IData } from 'content/people/people-data';
import './GroupMembers.css';

interface IGroupMembersProps {
  data: IData,
};

const cn = cnCreate('group-members');
const GroupMembers: React.FC<IGroupMembersProps>  = () => {
  return (
    <div className={cn()}>

    </div>
  );
};

export default GroupMembers;
