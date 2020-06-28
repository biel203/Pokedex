import styled from "styled-components";
import _ from "lodash";
import Link from "next/link";

import { usePkmnContext } from "../context/PokeList";

export default function PokemonComponent() {
  const { pkmnList } = usePkmnContext();
  return (
    <div>
      <Ul>
        {pkmnList.map(({ id, name, types }) => {
          return (
            <Link href="/detail/[pkmn]" as={`/detail/${id}`} passHref>
              <Li>
                <ImageSpan>
                  <Img
                    src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                    alt=""
                  />
                </ImageSpan>

                <Content type={types[0].type.name}>
                  <PkmnInfo>
                    <Number>#{("000" + id).slice(-3)}</Number>
                    <Name>{_.startCase(name)}</Name>
                    <Title>
                      {types.map(({ type: { name } }) => (
                        <Badge type={name} key={name}>
                          <IconType
                            src={`/vectors/types/${name}.svg`}
                            alt="Type Pokemon"
                          ></IconType>
                          {_.startCase(name)}
                        </Badge>
                      ))}
                    </Title>
                  </PkmnInfo>
                </Content>
              </Li>
            </Link>
          );
        })}
      </Ul>
    </div>
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

const Img = styled.img`
  width: 80px;
  height: 95px;
`;
const Li = styled.li`
  width: 30%;
  height: 100px;
  display: inline-block;
  //   border: solid 1px #000;
  position: relative;
  margin: 5px;
`;

const Content = styled.div`
  background-color: ${(props) =>
    props.theme.colors.background.type[props.type]};
  height: 85px;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-radius: 15px;
  ${this}:hover {
    cursor: pointer;
    box-shadow: 1px 1px 2px black;
  }
`;

const Background = styled.div`
  background-image: url(/vectors/pokeball.svg),
    linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  background-position: right;
  background-repeat: no-repeat;
  background-size: 100px;
  background-position-x: 112%;
  background-position-y: -5%;
  height: 100%;
`;

const PkmnInfo = styled.div`
  padding: 15px 0 0 10px;
`;

const ImageSpan = styled.div`
  position: absolute;
  z-index: 20;
  right: 10px;
`;

const Number = styled.div`
  font-size: 12px;
  color: rgba(23, 23, 27, 0.6);
  font-weight: bold;
`;

const Name = styled.div`
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 2px;
`;

const Title = styled.div`
  font-size: 12px;
`;

const Badge = styled.span`
  background-color: ${(props) => props.theme.colors.type[props.type]};
  padding: 3px;
  margin: 0 5px 0px 0px;
  border-radius: 3px;
  line-height: 20px;
  color: #ffffff;
`;

const IconType = styled.img`
  width: 15px;
  margin: 0px 3px -4px 0;
  filter: brightness(100);
`;
