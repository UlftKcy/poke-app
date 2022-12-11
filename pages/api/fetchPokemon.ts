import axios from "axios";

const API_URL = 'https://pokeapi.co/api/v2/';

export const getAllPokemon = async () => {
    try {
        const response = await axios.get(API_URL)

        console.log(response.data)
        return response.data;

    } catch (error) {
        throw new Error('Something went wrong while get pokemons', { cause: error });
    }
};