import React from 'react';

interface IButton {
  label: string;
  color?: string;
}

export const Button = ({ label, color }: IButton) => {
  return (
    <div
      className='custom-button'
      style={color ? { backgroundColor: color } : {}}
    >
      {label}
    </div>
  );
};
