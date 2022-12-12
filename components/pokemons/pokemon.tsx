import React from 'react'
import useSWR from 'swr'
import { PokemonType } from '../../types'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Pokemon = ({ url }: PokemonType) => {

    const { data, error } = useSWR(url, fetcher);
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    )
}

export default Pokemon;