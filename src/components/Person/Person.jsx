
import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerLabel = '';
  if (isMarried) {
    partnerLabel = sex === 'm' ? 'wife' : 'husband';
  }

  return (
    <div className='Person'>
      <div className='Person_name'>{name}</div>
      {age !== undefined && (
        <div className='Person_age'> {`Age: ${age}`}</div>
      )}
      <div className='Person_partner'>
        {isMarried 
        ? `My ${partnerLabel} is ${partnerName}`
        : `I am not married`}
      </div>
    </div>
  );
};
