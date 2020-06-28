import styled from "styled-components";
import _ from "lodash";
import { useDetailContext } from "../../context/PokeDetail";

export default function DetailHeader() {
  const {
    pkmnDetail: {
      pokemon: { types, id, name },
    },
  } = useDetailContext();
  return (
    <>
      <Header type={types[0].type.name}>
        <Container>
          <Content>
            <Img
              src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
              alt=""
            />
          </Content>

          <Content>
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
          </Content>
        </Container>
      </Header>
    </>
  );
}

const Header = styled.header`
  margin: 5%;
  padding: 5%;
`;

const Container = styled.div`
  width: 60%;
  margin: auto;
`;

const Content = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 65%;
`;

const Img = styled.img`
  width: 130px;
`;

const Number = styled.div`
  font-size: 16px;
  color: rgba(23, 23, 27, 0.6);
  font-weight: bold;
`;

const Name = styled.div`
  font-size: 30px;
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
