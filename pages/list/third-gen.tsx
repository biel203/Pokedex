import React from "react";
import { getInitialData } from "../../libs/pkmn";
import PokemonProvider from "../../context/PokeList";

import PokemonComponent from "../../components/PokemonComponent";

function ThirdGen({ pokemonList }) {
  return (
    <PokemonProvider value={pokemonList}>
      <PokemonComponent />
    </PokemonProvider>
  );
}

export default ThirdGen;

export const getStaticProps = async (ctx) => {
  const pokemonList = await getInitialData("3");

  return { props: { pokemonList } };
};
