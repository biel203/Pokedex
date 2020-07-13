import React from "react";
import styled from "styled-components";
import _ from "lodash";

import ProgressBar from "../base/ProgressBar";
import { useDetailContext } from "../../context/PokeDetail";
import { ChangeColorType } from "../../interfaces";

const dictionary = {
  hp: "HP",
  "special-attack": "Special Attack",
  "special-defense": "Special Defense",
  attack: "Attack",
  defense: "Defense",
  speed: "Speed",
};

export default function AboutDetail() {
  const {
    pkmnDetail: {
      pokemon: { height, weight, base_experience, abilities, types, stats },
      species: {
        genera,
        base_happiness,
        capture_rate,
        growth_rate: { name },
      },
    },
  } = useDetailContext();

  const { genus } = genera.filter((data) => data.language.name == "en")[0];
  const evYield = stats.filter(({ effort }) => effort);
  return (
    <>
      <Ul>
        <LiTitle type={types[0].type.name}>Pokédex Data</LiTitle>
        <Li>
          <Title>Species</Title>
          <Result>{genus}</Result>
        </Li>
        <Li>
          <Title>Height</Title>
          <Result>{height / 10}m</Result>
        </Li>
        <Li>
          <Title>Weight</Title>
          <Result>
            {weight / 10}kg
            <Convert>({((weight * 2.2046) / 10).toFixed(2)}lbs)</Convert>
          </Result>
        </Li>
        <Li>
          <Title>Abilities</Title>
          <Result>
            {abilities.map(({ ability: { name } }, index) => (
              <div key={index}>
                {index + 1}. {_.startCase(name)}
              </div>
            ))}
          </Result>
        </Li>
      </Ul>

      <Ul>
        <LiTitle type={types[0].type.name}>Training</LiTitle>
        <Li>
          <Title>EV Yield</Title>
          <Result>
            {evYield.map(({ stat: { name } }, index) => (
              <div key={index}>
                {index + 1} {dictionary[name]}
              </div>
            ))}
          </Result>
        </Li>
        <Li>
          <Title>Catch Rate</Title>
          <Result>{capture_rate}</Result>
        </Li>
        <Li>
          <Title>Base Friendship</Title>
          <Result>{base_happiness}</Result>
        </Li>
        <Li>
          <Title>Base Exp</Title>
          <Result>{base_experience}</Result>
        </Li>
        <Li>
          <Title>Growt Rate</Title>
          <Result>{name}</Result>
        </Li>
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

const Result = styled.div`
  width: 200px;
  font-size: 16px;
  color: #747476;
`;

const Title = styled(Result)`
  font-weight: bold;
`;

const Convert = styled.span`
  font-size: 10px;
`;

const LiTitle = styled(Title)<ChangeColorType>`
  color: ${(props) => props.theme.colors.type[props.type]};
`;
