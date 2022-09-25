import { styled } from "@mui/material/styles";
import { Link } from "gatsby";
import React from "react";

const Tab = styled("span")`
  ${(props: { bold: boolean }) => (props.bold ? "font-weight: 400;" : "")}
`;

const AsideMini: React.FC = () => (
  <div>
    <p>Addison Kalanther</p>
    <p>
      <Tab
        bold={
          typeof window != "undefined" &&
          window.location.href.indexOf("/art") !== -1
        }
      >
        <Link to="/art">Art</Link>
      </Tab>{" "}
      |{" "}
      <Tab
        bold={
          typeof window != "undefined" &&
          window.location.href.indexOf("/tech") !== -1
        }
      >
        <Link to="/tech">Technology</Link>
      </Tab>
    </p>
  </div>
);

export default AsideMini;
