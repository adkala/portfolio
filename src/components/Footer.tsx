import { styled } from "@mui/material/styles";
import React from "react";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  margin: 1rem 2.5rem;
  position: fixed;
  bottom: 0;
`;

const Text = styled("p")`
  opacity: 0.33;
  text-transform: none;
`;

const Footer: React.FC = () => (
  <Container>
    <Text>Designed and Developed by Addison Kalanther ©</Text>
  </Container>
);

export default Footer;
