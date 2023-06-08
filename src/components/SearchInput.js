import React from 'react';

const SearchInput = ({ onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={onChange}
      className='border rounded-[5px] p-[0.4rem] w-[40vh] '
    />
  );
};

export default SearchInput;