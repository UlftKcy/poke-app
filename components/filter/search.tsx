import React, { ChangeEvent } from 'react';

type InputEvent = ChangeEvent<HTMLInputElement>;

type SearchProps = {
  setSearchTerm: (searchTerm: String) => void;
};

const Search = ({ setSearchTerm }: SearchProps) => {
  return (
    <div className='w-full sm:px-20 mb-10'>
      <label htmlFor="search" className='relative bg-white flex items-center ring-1 ring-slate-300 rounded-md p-2'>
        <svg width="24" height="24" fill="none" aria-hidden="true" className="mx-3 flex-none text-slate-500"><path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
        <input onChange={(e: InputEvent) => setSearchTerm(e.target.value)} className='w-full outline-none dark:bg-white dark:text-slate-900' type="text" name='search' placeholder='Search...' />
      </label>
    </div>
  )
}

export default Search;