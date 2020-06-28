import Head from "next/head";
import Link from "next/link";

import { getOnePokemon, getPokemonGen } from "../../libs/pkmn";
import DetailLayout from "../../components/DetailLayout";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${(props) =>
      props.theme.colors.background.type[props.type]}
`;

export default function Post({ postData }) {
  return (
    <>
      <GlobalStyle type={postData.types[0].type.name} />
      <Head>
        <title>{postData.name}</title>
      </Head>
      <DetailLayout pkmn={postData} />
      <Link href="/">Voltar</Link>
    </>
  );
}
export async function getStaticPaths() {
  const { pokemon_entries } = await getPokemonGen();
  const paths = pokemon_entries.map(({ entry_number }) => ({
    params: { pkmn: String(entry_number) },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { pkmn } }) {
  const postData = await getOnePokemon(pkmn);
  return {
    props: {
      postData,
    },
  };
}
