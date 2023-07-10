import styled from "styled-components";

const Container = styled("div")`
  margin: 4rem;

  @media (max-width: 450px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 2rem;
  }
`;

const Parent = styled(Container)``;

const Divider = styled("div")`
  height: 2rem;
  width: 100%;

  @media (max-width: 600px) {
    height: 2rem;
  }
`;

const Click = styled("span")`
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Text = styled("p")`
  //max-width: 28rem;
`;

const Title = styled("p")`
  font-size: 1.25rem;
`;

const Secondary = styled("span")`
  opacity: 0.6;
`;

const Spacer = styled("span")`
  margin: 0 0.625rem 0 0.625rem;
  height: 100%;
`;

const Image = styled("div")`
  max-width: 48rem;
`;

export {
  Container,
  Parent,
  Divider,
  Click,
  Text,
  Title,
  Secondary,
  Spacer,
  Image,
};
