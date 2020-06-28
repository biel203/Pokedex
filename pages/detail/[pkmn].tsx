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

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${(props) =>
      props.theme.colors.background.type[props.type]}
`;

export default function PokemonDetail({ pokemon, evoChain, species }) {
  return (
    <>
      <GlobalStyle type={pokemon.types[0].type.name} />
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <DetailHeader pkmn={pokemon} />
      <DetailMain pkmn={pokemon} evoChain={evoChain} species={species} />
      <Link href="/">Voltar</Link>
    </>
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
