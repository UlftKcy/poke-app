import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import React, { Fragment, ReactElement } from "react";
import Filter from "../components/filter/filter";
import Pokemon from "../components/pokemons/pokemon";
import { PokemonType } from "../types";
import { getAllPokemon } from "./api/fetchPokemon";

const Home: NextPage = ({ pokemons }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Fragment>
      <Filter />
      <div className="grid auto-rows-max grid-cols-4 gap-10">
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
