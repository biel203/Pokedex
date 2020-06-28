import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const Header = styled.header`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export default function DetailLayout({ pkmn: { name, types } }) {
  return (
    <>
      <Header type={types[0].type.name}></Header>
    </>
  );
}
