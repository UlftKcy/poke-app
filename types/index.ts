export interface PokemonType {
   name: string,
   url:string,
}

export type PokemonProps = {
    pokemons: any[]
}

export interface ModalTypes {
    children?: React.ReactNode;
    isOpen: boolean;
    toggle: () => void;
    url: string;
    name: string;
}