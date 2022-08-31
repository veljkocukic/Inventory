import React, { ReactNode } from 'react';
import '../../sass/main.scss';

interface IIconButton {
  icon: ReactNode;
}

export const IconButton = ({ icon }: IIconButton) => {
  return <div className='icon-button'>{icon}</div>;
};
