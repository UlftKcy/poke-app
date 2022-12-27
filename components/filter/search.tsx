import React from 'react'

const Search = () => {
  return (
    <div className='md:w-1/3 w-full mx-auto mb-10'>
        <input type="text" className='w-full rounded-md py-2 px-4 text-gray-700 dark:text-white outline-0 text-sm' placeholder='search pokemon...' />
    </div>
  )
}

export default Search;