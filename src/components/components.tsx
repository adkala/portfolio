import styled from "styled-components";

const Container = styled("div")`
  margin: 4rem;

  @media (max-width: 600px) {
    margin: 2rem;
  }
`;

const Parent = styled(Container)``;

const Divider = styled("div")`
  height: 2rem;
  width: 100%;

  @media (max-width: 600px) {
    height: 1rem;
  }
`;

const Click = styled("span")`
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Text = styled("p")`
  max-width: 28rem;
`;

const Image = styled("div")`
  max-width: 48rem;
`;

export { Container, Parent, Divider, Click, Text, Image };
