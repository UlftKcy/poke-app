import { useRouter } from 'next/router';
import React, { Fragment } from 'react'
import { createPortal } from 'react-dom';
import useSWR from 'swr';

interface ModalTypes {
    children?: React.ReactNode;
    isOpen: boolean;
    toggle: () => void;
    url: string;
    name:string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Modal = (props: ModalTypes) => {
     const { data, error } = useSWR(props.url, fetcher);

     if (error) return <div>Failed to load</div>
     if (!data) return <div>Loading...</div>

     if (!props.isOpen) return null;
    return(
        <>
         {createPortal(
                <div className='w-screen h-screen absolute z-50 top-50'>
                    <div className='w-2/5 h-2/5 bg-white rounded-2xl p-3 shadow-lg'>
                        {data.name}
                    </div>
                </div>,
        document.getElementById(`${props.name}`) as HTMLElement

    )}
        </>
    )
}

export default Modal;