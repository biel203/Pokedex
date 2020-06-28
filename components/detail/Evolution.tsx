import styled from "styled-components";
import _ from "lodash";

import { useDetailContext } from "../../context/PokeDetail";

export default function DetailMain() {
  const {
    pkmnDetail: {
      pokemon: { types },
      evoChain,
    },
  } = useDetailContext();
  debugger;
  //   const teste = getEvo(evoChain);
  return (
    <>
      <Ul>
        <LiTitle type={types[0].type.name}>Base Stats</LiTitle>
        {/* {chain.map(({ evolves_to, species: { name } }, index) => {
          if (evolves_to && evolves_to.length && evolves_to[index + 1]) {
            <Li key={index}>
              <Name>{dictionary[name]}</Name>
              <Name>{base_stat}</Name>
              <ProgressBar
                percent={base_stat}
                background={types[0].type.name}
              />
            </Li>;
          }
        })} */}
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
