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
      {React.Children.toArray(pokemons.map((pokemon: PokemonType): ReactElement => (
        <Pokemon name={pokemon.name} url={pokemon.url}/>
      )))}
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pokemons = await getAllPokemon();
  return {
    props: {
      pokemons
    }
  }
}

export default Home;
