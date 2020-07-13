import React from "react";
import { getInitialData } from "../libs/pkmn";
import PokemonProvider from "../context/PokeList";

import PokemonComponent from "../components/PokemonComponent";

function Home({ pokemonList }) {
  return (
    <PokemonProvider value={pokemonList}>
      <PokemonComponent />
    </PokemonProvider>
  );
}

export default Home;

export const getStaticProps = async (ctx) => {
  const pokemonList = await getInitialData("1");

  return { props: { pokemonList } };
};
