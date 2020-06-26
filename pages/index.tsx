import { getAllPokemon, getOnePokemon } from "../libs/pkmn";
import Container from "../components/container";

export default function Home({ pokemonList }) {
  debugger;
  return (
    <>
      {pokemonList.info.map((pkmn) => (
        <Container {...pkmn} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const { count, next, previous, results } = await getAllPokemon();

  const pokemonList = {
    count,
    next,
    previous,
    info: await Promise.all(
      results.map(({ name, url }) => getOnePokemon(name))
    ),
  };

  return {
    props: {
      pokemonList,
    },
  };
}
