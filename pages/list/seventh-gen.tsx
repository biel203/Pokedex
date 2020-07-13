import React from "react";
import { getInitialData } from "../../libs/pkmn";
import PokemonProvider from "../../context/PokeList";

import PokemonComponent from "../../components/PokemonComponent";

function SeventhGen({ pokemonList }) {
  return (
    <PokemonProvider value={pokemonList}>
      <PokemonComponent />
    </PokemonProvider>
  );
}

export default SeventhGen;

export const getStaticProps = async (ctx) => {
  const pokemonList = await getInitialData("7");

  return { props: { pokemonList } };
};
