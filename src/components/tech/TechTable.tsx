import TechEntryView from "./TechEntryView";
import "./TechTable.css";
import { styled } from "@mui/material/styles";
import React from "react";

const Content = styled("div")`
  margin-top: 11.5rem;
  margin-bottom: 3.5rem;
  max-width: 60rem;
  margin-left: 1rem;

  @media (max-width: 1000px) {
    padding-right: 2.5rem;
    padding-left: 1.25rem;
    margin-top: 2.5rem;
  }
`;

const Table = styled("table")`
  font-weight: 300;
`;

const Header = styled("th")`
  padding-bottom: 1rem;
`;

const Name = styled(Header)`
  width: 12rem;
`;

const Description = styled(Header)`
  width: 28rem;
  @media (max-width: 1200px) {
    width: 20rem;
  }
  @media (max-width: 1000px) {
    width: 18rem;
  }
`;

const Date = styled(Header)`
  width: 14rem;
  @media (max-width: 520px) {
    display: none;
  }
`;

interface ITechTable {
  data: any;
}

const TechTable: React.FC<ITechTable> = ({ data }) => (
  <Content>
    <Table>
      <tr>
        <Name>Name</Name>
        <Description>Description</Description>
        <Date>Date</Date>
        <th></th>
      </tr>
      {data.allTech.nodes.map((node: any) => (
        <TechEntryView node={node} />
      ))}
    </Table>
  </Content>
);

export default TechTable;
