import { getPokemonGen, getOnePokemon } from "../libs/pkmn";
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
  const { name, pokemon_entries } = await getPokemonGen();
  const pokemonList = {
    name,
    info: await Promise.all(
      pokemon_entries.map(({ pokemon_species: { name } }) =>
        getOnePokemon(name)
      )
    ),
  };

  return { pokemonList };
};
