import React from 'react';
import cnCreate from 'utils/cnCreate';
import { IGroupPerson } from 'content/people/people';
import './Person.css';

interface IPersonProps {
  data: IGroupPerson,
};

const cn = cnCreate('person');
const Person: React.FC<IPersonProps> = ({ data }) => {
  const { name, image, address, phone, fax, email, publications } = data;

  return (
    <div className={cn()}>
      <div className={cn('container')}>
        <div className={cn('image-box')}>
          {image ?
            <img src={image} className={cn('image')} alt="name" />
            : <div className={cn('no-image')} />
          }
        </div>
        <div>
          <h5 className={cn('name')}>{name}</h5>
          {publications && (
            <a target="_blank" rel="noreferrer" href={publications} className={cn('publication')}>Research activity on{'\u00A0'}Pulbons.com</a>
          )}
        </div>
      </div>
      <div className={cn('info')}>
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
  );
};

export default Person;
