import React from 'react'
/* import useSWR from 'swr' */
import { PokemonType } from '../../types'

/* const fetcher = (url: string) => fetch(url).then((res) => res.json()); */

const Pokemon = ({ name }: PokemonType) => {
    /* const { data, error } = useSWR(url, fetcher); */

    /*  if (error) return <div>Failed to load</div>
     if (!data) return <div>Loading...</div> */

    return (
        <div>
            <div className='h-36 w-36 m-auto flex items-center justify-center ring-2 hover:ring-blue-700 ring-white rounded-full bg-gradient-to-r from-red-800 to-red-600 shadow-md hover:shadow-blue-700 mb-2'>
                <div className='relative w-1/2 h-1/2 flex items-center justify-center p-1 bg-black rounded-full'>
                    <button className='w-4/5 h-4/5 bg-white rounded-full hover:animate-pulse hover:bg-gradient-to-r from-blue-500 to-cyan-500'></button>
                </div>
            </div>
            <h1 className='text-center capitalize text-lg font-mono font-extrabold text-blue-600 contrast-200'>{name}</h1>
        </div>

    )
}

export default Pokemon;