import React from 'react';
import '../../sass/main.scss';
import { DotsNine } from 'phosphor-react';
import { Leaf, CaretDown } from 'phosphor-react';
export const TopBar = () => {
  return (
    <div className='top-bar-container'>
      <div className='top-bar-left'>
        <DotsNine size={35} weight='bold' />
      </div>
      <div className='top-bar-logo'>
        <Leaf size={32} />
        <h2>AgroPilot</h2>
      </div>
      <div className='top-bar-user'>
        <div className='text-image-container'>
          <img src='https://placekitten.com/200/300' alt='user' />
          <div className='user-info'>
            <p className='user-name'>Don Jone</p>
            <p className='user-sub-text'>Placegolder</p>
          </div>
        </div>
        <div className='green-circle'>
          <CaretDown size={15} color={'white'} weight='bold' />
        </div>
      </div>
    </div>
  );
};
