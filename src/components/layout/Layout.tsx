import Footer from "../Footer";
import Aside from "../aside/Aside";
import { styled } from "@mui/material/styles";
import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";

const Parent = styled("div")`
  margin-right: auto;
  margin-left: auto;
  max-width: 80rem;
`;

const DesktopBody = styled("div")`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
`;

const DesktopContent = styled("div")`
  padding: 0 1.25rem 0 2.5rem;
  @media (max-width: 1000px) {
    padding: 0;
  }
`;

const DesktopAside = styled("div")`
  position: sticky;
  display: block;
  top: 0;
  min-width: 20rem;
`;

const Content = styled("div")`
  padding-top: 10rem;
  padding-right: 1.25rem;
  max-width: 60rem;
  @media (max-width: 1000px) {
    padding-right: 0rem;
    max-width: 100%;
    padding-top: 0;
  }
`;

const DesktopWrapper = styled("div")`
  display: initial;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const MobileWrapper = styled("div")`
  display: none;
  @media (max-width: 1000px) {
    display: initial;
  }
`;

interface ILayout {
  children: ReactElement;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const DesktopInterface = (
    <DesktopBody>
      <DesktopContent>
        <Content>{children}</Content>
      </DesktopContent>
      <div>
        <DesktopAside>
          <Aside />
        </DesktopAside>
      </div>
    </DesktopBody>
  );

  const MobileInterface = (
    <>
      <Aside />
      <Content>{children}</Content>
    </>
  );

  return (
    <Parent>
      <Helmet>
        <title>addikala</title>
        <meta
          name="description"
          content="Portfolio website for Addison Kalanther"
        />
      </Helmet>
      <DesktopWrapper>{DesktopInterface}</DesktopWrapper>
      <MobileWrapper>{MobileInterface}</MobileWrapper>
      <Footer />
    </Parent>
  );
};

export default Layout;
