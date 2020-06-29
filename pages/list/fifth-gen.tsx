import { getInitialData } from "../../libs/pkmn";
import PokemonProvider from "../../context/PokeList";

import PokemonComponent from "../../components/PokemonComponent";

function FifthGen({ pokemonList }) {
  return (
    <PokemonProvider value={pokemonList}>
      <PokemonComponent />
    </PokemonProvider>
  );
}

export default FifthGen;

export const getStaticProps = async (ctx) => {
  const pokemonList = await getInitialData("5")

  return { props: { pokemonList } };
};
