import styled from "styled-components";

const Container = styled.div`
  height: 7px;
  width: 50%;
  position: relative;
  margin-top: 6px;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 10s ease-in-out;
`;

const Background = styled(BaseBox)`
  width: 100%;
`;

const Progress = styled(BaseBox)`
  background: ${({ color, theme }) =>
    color ? theme.colors.type[color] : "black"};
  width: ${({ percent }) => percent}%;
`;

export default function App({ percent, background }) {
  console.log(background);
  return (
    <Container>
      <Background />
      <Progress percent={percent} color={background} />
    </Container>
  );
}
