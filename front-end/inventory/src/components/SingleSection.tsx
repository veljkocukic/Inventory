import React from 'react';
import { ArrowUpRight } from 'phosphor-react';

export const SingleSection = (props: any) => {
  return (
    <div className='single-section'>
      <div className='single-section-top'>
        <p>{props.title}</p>
        <div className='gray-box' onClick={() => props.onClick}>
          <ArrowUpRight size={25} />
        </div>
      </div>
      {props.children}
    </div>
  );
};
