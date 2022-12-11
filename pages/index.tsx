import { Fragment } from "react";
import Filter from "../components/filter/category";
import Pokemon from "../components/pokemons/pokemon";
import { GetStaticProps } from "next";
import { getAllPokemon } from "./api/fetchPokemon";

const Home = () => {
  return (
    <Fragment>
      <Filter />
      <Pokemon />
    </Fragment>
  )
}

/* export async function GetStaticProps() {
  const pokemons = getAllPokemon();
  return (
    props: {
      pokemons
    }
  )
} */

export default Home;
