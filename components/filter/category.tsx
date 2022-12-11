import React from 'react';
import Search from './search';
import Selection from './selection';

const Filter = () => {
  return (
    <div className='flex justify-around flex-wrap'>
      <Selection/>
      <Search/>
    </div>
  )
};

export default Filter;