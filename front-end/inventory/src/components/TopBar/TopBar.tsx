import React from 'react';
import { searchIcon } from '../../assets/icons/searchIcon';
import '../../sass/main.scss';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { SearchBox } from '../SearchBox/SearchBox';

export const TopBar = () => {
  return (
    <div className='top-bar-container'>
      <h1 className='top-bar-title'>Overview</h1>
      <SearchBox />
      <div className='top-bar-buttons'>
        <IconButton icon={searchIcon} />
        <Button label='Upgrade Plan' />
      </div>
    </div>
  );
};
