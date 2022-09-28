import AsideMini from "./AsideMini";
import { styled } from "@mui/material/styles";
import React from "react";

const Top = styled("div")`
  width: 100%;
  text-align: right;
  top: 0;
  background-color: white;
  z-index: 1;
  position: sticky;
`;

const TopWrap = styled("div")`
  padding: 1rem 2.5rem;
`;

const Description = styled("div")`
  width: 100%;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const DescriptionWrap = styled("div")`
  padding: 0 2.5rem 3rem 0;
`;

const Title = styled("p")`
  max-width: 12rem;
`;

const Spacer = styled("div")`
  height: 2rem;
  width: 12rem;
`;

const Spacer2 = styled("div")`
  height: 1rem;
  width: 100%;
`;

interface IAside {
  page: string;
}

const Aside: React.FC<IAside> = ({ page }) => (
  <>
    <Spacer />
    <Top>
      <TopWrap>
        <AsideMini page={page} />
      </TopWrap>
    </Top>
    <div />
    <Description>
      <DescriptionWrap>
        <Title>
          EECS Student at UC Berkeley who explores tech and design. I put stuff
          here when I'm bored.
        </Title>

        <Spacer2 />
        <p>
          <a
            href="https://www.instagram.com/addikala"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/addikala"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://www.github.com/adkala"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </DescriptionWrap>
    </Description>
  </>
);

export default Aside;
