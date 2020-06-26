import Link from "next/link";
import styled from "styled-components";
import _ from "lodash";

const Container = styled.div`
  background: yellow;
`;

export default function Layout({ name, sprites: { front_default }, types }) {
  return (
    <div>
      <Container>
        {_.startCase(name)}, {front_default},{" "}
        {types.map(({ type: { name } }, index) => (
          <div>
            {index} - {name}
          </div>
        ))}
      </Container>
    </div>
  );
}
