import React from 'react';
import cnCreate from 'utils/cnCreate';
import { IGroupPeople } from 'content/people/people-data';
import './GroupMembers.css';

interface IGroupMembersProps {
  data: IGroupPeople,
};

const cn = cnCreate('group-members');
const GroupMembers: React.FC<IGroupMembersProps> = ({ data }) => {
  return (
    <div className={cn()}>
      {data.text && (
        <div className={cn('general-address')}>
          <div className={cn('wrap')}>
            <p className={cn('title')}>General address:</p>
            <p dangerouslySetInnerHTML={{__html: data.text}} />
          </div>
        </div>
      )}
      {data.people.map(({ name, degree, image, address, phone, fax, email, publications }, i) => (
        <div className={cn('person')}>
          <div className={cn('image-box')}>
            {image ?
              <img src={image} className={cn('image')} alt="name" />
              : <div className={cn('no-image')} />
            }
          </div>
          <div className={cn('personal-info')}>
            <p className={cn('name')}>{name}</p>
            {degree && (
              <p className={cn('degree')}>{degree}</p>
            )}
            {publications && (
              <a href={publications} className={cn('publication')}>Research activity on Pulbons.com</a>
            )}
          </div>
          <div>
            {address && (
              <div className={cn('wrap')}>
                <p className={cn('title')}>Workplace:</p>
                <p className={cn('text')}>{address}</p>
              </div>
            )}
            {phone && (
              <div className={cn('wrap')}>
                <p className={cn('title')}>Tel:</p>
                <p dangerouslySetInnerHTML={{__html: phone}} />
              </div>
            )}
            {fax && (
              <div className={cn('wrap')}>
                <p className={cn('title')}>Fax:</p>
                <p className={cn('text')}>{fax}</p>
              </div>
            )}
            {email && (
              <div className={cn('wrap')}>
                <p className={cn('title')}>Email:</p>
                <a href={`mailto: ${email}`} className={cn('text')}>{email}</a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupMembers;
