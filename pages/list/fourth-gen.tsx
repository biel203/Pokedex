import { getInitialData } from "../../libs/pkmn";
import PokemonProvider from "../../context/PokeList";

import PokemonComponent from "../../components/PokemonComponent";

function FourthGen({ pokemonList }) {
  return (
    <PokemonProvider value={pokemonList}>
      <PokemonComponent />
    </PokemonProvider>
  );
}

export default FourthGen;

export const getStaticProps = async (ctx) => {
  const pokemonList = await getInitialData("4")

  return { props: { pokemonList } };
};
