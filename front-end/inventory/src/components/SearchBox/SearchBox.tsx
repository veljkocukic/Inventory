import React from 'react';
import '../../sass/main.scss';
import { searchIcon } from '../../assets/icons/searchIcon';

export const SearchBox = () => {
  return (
    <div className='search-box-container'>
      {searchIcon}
      <input type='text' placeholder='Search' />
    </div>
  );
};
