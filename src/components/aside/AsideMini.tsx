import { styled } from "@mui/material/styles";
import { Link } from "gatsby";
import React from "react";

const Tab = styled("span")`
  ${(props: { bold: string }) =>
    props.bold == "true" ? "font-weight: 400;" : ""}
`;

interface IAsideMini {
  page: string;
}

const AsideMini: React.FC<IAsideMini> = ({ page }) => (
  <div>
    <p>Addison Kalanther</p>
    <p>
      <Tab bold={page == "blog" ? "true" : "false"}>
        <Link to="/blog">Blog</Link>
      </Tab>{" "}
      |{" "}
      <Tab bold={page == "projects" ? "true" : "false"}>
        <Link to="/projects">Projects</Link>
      </Tab>
    </p>
  </div>
);

export default AsideMini;
