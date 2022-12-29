import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import React, { Fragment, ReactElement, useState } from "react";
import Pokemon from "../components/pokemons/pokemon";
import { PokemonType } from "../types";
import { getAllPokemon } from "./api/fetchPokemon";
import Search from "../components/filter/search";

const Home: NextPage = ({ pokemons }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchTerm, setSearchTerm] = useState<String>("");
  if (searchTerm) {
    pokemons = pokemons.filter((pokemon:PokemonType) => pokemon["name"].toLocaleLowerCase().includes((searchTerm.toLocaleLowerCase()).trim()))
}
  return (
    <Fragment>
      <Search setSearchTerm={setSearchTerm}/>
      <div className="grid auto-rows-max cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {React.Children.toArray(pokemons.map((pokemon: PokemonType): ReactElement => (
          <Pokemon name={pokemon.name} url={pokemon.url} />
        )))}
      </div>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pokemons = await getAllPokemon();
  return {
    props: {
      pokemons
    }
  }
}

export default Home;
