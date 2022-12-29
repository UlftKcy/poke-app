import React from 'react'
import useModal from '../../hooks/useModal';
import { PokemonType } from '../../types'
import Modal from './modal';

const Pokemon = ({ name, url }: PokemonType) => {
    const { isOpen, toggle } = useModal();
    return (
        <div id={name}>
            <div className='h-36 w-36 m-auto flex items-center justify-center ring-2 hover:ring-blue-700 ring-white rounded-full bg-gradient-to-r from-red-800 to-red-600 shadow-md hover:shadow-blue-700 mb-2'>
                <div className='relative w-1/2 h-1/2 flex items-center justify-center p-1 bg-black rounded-full'>
                    <button onClick={toggle} className='w-4/5 h-4/5 bg-white rounded-full hover:animate-pulse hover:bg-gradient-to-r from-blue-500 to-cyan-500'></button>
                </div>
            </div>
            <h1 className='text-center capitalize text-lg font-mono font-extrabold text-blue-600 dark:text-white contrast-200'>{name}</h1>
            <Modal isOpen={isOpen} toggle={toggle} url={url} name={name} />
        </div>
    )
}

export default Pokemon;