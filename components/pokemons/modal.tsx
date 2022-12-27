import { useRouter } from 'next/router';
import React, { Fragment } from 'react'
import { createPortal } from 'react-dom';
import useSWR from 'swr';

interface ModalTypes {
    children?: React.ReactNode;
    isOpen: boolean;
    toggle: () => void;
    url: string;
    name: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Modal = (props: ModalTypes) => {
    const { data, error } = useSWR(props.url, fetcher);

    const capitalize = (name: string): string => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    if (!props.isOpen) return null;

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 w-full h-full overflow-x-hidden overflow-y-auto md:inset-y-1/4 md:inset-x-1/3 p-4 font-mono ${props.isOpen ? "" : "hidden"}`}>
            <div className='w-64 h-auto mx-auto sm:mx-0 rounded-2xl p-3 shadow-lg bg-amber-400'>
                <div className="flex items-center justify-between p-2">
                    <h1 className='text-2xl font-bold font-mono'>{capitalize(data.name)}</h1>
                    <button onClick={props.toggle} type="button" className="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg className="w-5 h-5 text-amber-600 hover:text-amber-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-6 space-y-6">
                    <img className='ring-1 rounded-lg block mx-auto' src={data.sprites.front_default} alt={data.name} />
                </div>
                <div className="p-6 space-y-6 text-sm">
                    <div className='grid grid-rows-1 grid-cols-2'>
                        <span className='text-amber-700'>Height:</span>
                        <span className='font-semibold'>{data.height}</span>
                    </div>
                    <div className='grid grid-rows-1 grid-cols-2'><span className='text-amber-700'>Weight:</span> <span className='font-semibold'>{data.weight}</span></div>
                    <div className='grid grid-rows-1 grid-cols-2'><span className='text-amber-700'>Abilites:</span> <span className='font-semibold'>{data.abilities[0].ability.name}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Modal;