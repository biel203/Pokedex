import Link from "next/link";
import styled from "styled-components";
import _ from "lodash";
import { Card, Button, Row, Col } from "react-bootstrap";

const Container = styled.div`
  background: yellow;
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  background: green
  width: 100%;
  position: grid;
`;

export default function Layout({ id, name, sprites, types }) {
  return (
    <Container>
      <Content>
        <div>
          {_.startCase(name)}
          {types.map(({ type: { name } }, index) => (
            <div>
              {index} - {name}
            </div>
          ))}
        </div>
      </Content>
      <div>
        <Img
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt=""
        />
      </div>
    </Container>
  );
}
