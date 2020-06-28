import Head from "next/head";
import Link from "next/link";
import { createGlobalStyle } from "styled-components";

import {
  getOnePokemon,
  getPokemonGen,
  getEvolutionChainPokemon,
  getSpeciesPokemon,
} from "../../libs/pkmn";
import DetailHeader from "../../components/detail/DetailHeader";
import DetailMain from "../../components/detail/DetailMain";
import PokemonDetailProvider from "../../context/PokeDetail";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${(props) =>
      props.theme.colors.background.type[props.type]}
`;

export default function PokemonDetail({ pokemon, evoChain, species }) {
  return (
    <PokemonDetailProvider value={{ pokemon, evoChain, species }}>
      <GlobalStyle type={pokemon.types[0].type.name} />
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <DetailHeader />
      <DetailMain />
      <Link href="/">Voltar</Link>
    </PokemonDetailProvider>
  );
}
export async function getStaticPaths() {
  const { pokemon_entries } = await getPokemonGen();
  const paths = pokemon_entries.map(({ entry_number }) => ({
    params: { pkmn: String(entry_number) },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { pkmn } }) {
  const [pokemon, evoChain, species] = await Promise.all([
    await getOnePokemon(pkmn),
    await getEvolutionChainPokemon(pkmn),
    await getSpeciesPokemon(pkmn),
  ]);
  return {
    props: {
      pokemon,
      evoChain,
      species,
    },
  };
}
