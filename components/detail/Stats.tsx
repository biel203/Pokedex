import React from "react";
import styled from "styled-components";
import _ from "lodash";

import ProgressBar from "../base/ProgressBar";

import { useDetailContext } from "../../context/PokeDetail";
import { ChangeColorType } from "../../interfaces/styled";

const dictionary = {
  hp: "HP",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  attack: "Attack",
  defense: "Defense",
  speed: "Speed",
};

export default function Statspokemon() {
  const {
    pkmnDetail: {
      pokemon: { types, stats },
    },
  } = useDetailContext();

  return (
    <>
      <Ul>
        <LiTitle type={types[0].type.name}>Base Stats</LiTitle>
        {stats.map(({ base_stat, stat: { name } }) => (
          <Li key={name}>
            <Name>{dictionary[name]}</Name>
            <Name>{base_stat}</Name>
            <ProgressBar percent={base_stat} background={types[0].type.name} />
          </Li>
        ))}
      </Ul>
    </>
  );
}

const Ul = styled.ul`
  text-align: justify;
  &:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 0;
  }
`;

const Li = styled.li`
  position: relative;
  margin: 10px 0 10px 0;
  display: flex;
  font-size: 12px;
`;

const Name = styled.div`
  width: 100px;
`;

const LiTitle = styled(Li)<ChangeColorType>`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.type[props.type]};
`;
