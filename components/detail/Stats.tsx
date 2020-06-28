import styled from "styled-components";
import _ from "lodash";

import ProgressBar from "../base/ProgressBar";

const dictionaty = {
  hp: "HP",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  attack: "Attack",
  defense: "Defense",
  speed: "Speed",
};

export default function DetailMain({ types, stats, abilities }) {
  console.log(types);
  return (
    <>
      <Ul>
        <LiTitle type={types[0].type.name}>Base Stats</LiTitle>
        {stats.map(({ base_stat, stat: { name } }) => (
          <Li key={name}>
            <Name>{dictionaty[name]}</Name>
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
  ${this}:after {
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

const LiTitle = styled(Li)`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.type[props.type]};
`;
