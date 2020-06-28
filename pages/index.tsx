import { getPokemonGen, getOnePokemon } from "../libs/pkmn";
import PokemonProvider from "../context/PokeList";

import PokemonComponent from "../components/PokemonComponent";

function Home({ pokemonList: { info } }) {
  return (
    <PokemonProvider value={info}>
      <PokemonComponent />
    </PokemonProvider>
  );
}

export default Home;

export const getStaticProps = async (ctx) => {
  const { name, pokemon_entries } = await getPokemonGen();
  const pokemonList = {
    name,
    info: await Promise.all(
      pokemon_entries.map(({ pokemon_species: { name } }) =>
        getOnePokemon(name)
      )
    ),
  };

  return { props: { pokemonList } };
};
