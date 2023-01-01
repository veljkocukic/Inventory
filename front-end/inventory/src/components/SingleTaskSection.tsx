import React from 'react';

export const SingleTaskSection = (props: any) => {
  const sClass = 'square background-' + (props.delay ? 'red' : 'green');
  return (
    <div className='single-task-section'>
      <div className={sClass}>
        <p>{props.sectionTime}</p>
      </div>
      <div className='text-container'>
        <div className='section-info'>
          <p>{props.sectionInfo}</p>
        </div>
        <div className='section-tag'>
          <p>{props.sectionTag}</p>
        </div>
      </div>
    </div>
  );
};
