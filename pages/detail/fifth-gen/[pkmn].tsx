import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";
import _ from "lodash";

import { getDetailProps, getStaticPahs } from "../../../libs/pkmn";
import DetailHeader from "../../../components/detail/DetailHeader";
import DetailMain from "../../../components/detail/DetailMain";
import PokemonDetailProvider from "../../../context/PokeDetail";

import { ChangeColorType } from "../../../interfaces";

const GlobalStyle = createGlobalStyle<ChangeColorType>`
  html, body {
    background-color: ${(props) =>
      props.theme.colors.background.type[props.type]}
`;

export default function PokemonDetail({ pokemon, evoChain, species }) {
  return (
    <PokemonDetailProvider value={{ pokemon, evoChain, species }}>
      <GlobalStyle type={pokemon.types[0].type.name} />
      <Head>
        <link
          rel="shortcut icon"
          href={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
        />
        <title>{_.startCase(pokemon.name)}</title>
      </Head>
      <header>
        <Link href="/">
          <A href="">Voltar</A>
        </Link>
      </header>
      <DetailHeader />
      <DetailMain />
    </PokemonDetailProvider>
  );
}

const A = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export async function getStaticPaths() {
  const paths = await getStaticPahs("5");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { pkmn } }) {
  const { pokemon, evoChain, species } = await getDetailProps(pkmn);

  return {
    props: { pokemon, evoChain, species },
  };
}
