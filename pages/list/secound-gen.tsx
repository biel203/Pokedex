import React from "react";
import { getInitialData } from "../../libs/pkmn";
import PokemonProvider from "../../context/PokeList";

import PokemonComponent from "../../components/PokemonComponent";

function SecoundGen({ pokemonList }) {
  return (
    <PokemonProvider value={pokemonList}>
      <PokemonComponent />
    </PokemonProvider>
  );
}

export default SecoundGen;

export const getStaticProps = async (ctx) => {
  const pokemonList = await getInitialData("2");

  return { props: { pokemonList } };
};
