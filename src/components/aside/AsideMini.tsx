import { styled } from "@mui/material/styles";
import { Link } from "gatsby";
import React from "react";

const Tab = styled("span")`
  ${(props: { bold: boolean }) => (props.bold ? "font-weight: 400;" : "")}
`;

interface IAsideMini {
  page: string;
}

const AsideMini: React.FC<IAsideMini> = ({ page }) => (
  <div>
    <p>Addison Kalanther</p>
    <p>
      <Tab bold={page == "art"}>
        <Link to="/art">Art</Link>
      </Tab>{" "}
      |{" "}
      <Tab bold={page == "tech"}>
        <Link to="/tech">Technology</Link>
      </Tab>
    </p>
  </div>
);

export default AsideMini;
