import { getAllPokemon, getOnePokemon } from "../libs/pkmn";
import PokemonProvider from "../context/PokeList";

import PokemonComponent from "../components/PokemonComponent";

export default function Home({ pokemonList: { info } }) {
  return (
    <PokemonProvider value={info}>
      <PokemonComponent />
    </PokemonProvider>
  );
}

Home.getInitialProps = async (ctx) => {
  const { count, next, previous, results } = await getAllPokemon();
  const pokemonList = {
    count,
    next,
    previous,
    info: await Promise.all(
      results.map(({ name, url }) => getOnePokemon(name))
    ),
  };

  return { pokemonList };
};
