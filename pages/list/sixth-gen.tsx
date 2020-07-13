import React from "react";
import { getInitialData } from "../../libs/pkmn";
import PokemonProvider from "../../context/PokeList";

import PokemonComponent from "../../components/PokemonComponent";

function SixthGen({ pokemonList }) {
  return (
    <PokemonProvider value={pokemonList}>
      <PokemonComponent />
    </PokemonProvider>
  );
}

export default SixthGen;

export const getStaticProps = async (ctx) => {
  const pokemonList = await getInitialData("6");

  return { props: { pokemonList } };
};
