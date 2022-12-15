const API_URL = 'https://pokeapi.co/api/v2';

export const getAllPokemon = async () => {
    try {
        const response = await fetch(`${API_URL}/pokemon?limit=20`)
        const response_data = await response.json();
        return response_data.results;

    } catch (error) {
        throw new Error('Something went wrong while get pokemons', { cause: error });
    }
};