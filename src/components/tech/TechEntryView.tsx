import TechExtendView from "./TechExtendView";
import { styled } from "@mui/material/styles";
import React from "react";
import { useState } from "react";

const DescriptionText = styled("p")`
  width: 24rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: 1200px) {
    width: 18rem;
  }
  @media (max-width: 1000px) {
    width: 16rem;
  }
`;

const HoverLabel = styled("td")`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Date = styled("td")`
  @media (max-width: 520px) : {
    display: none;
  }
`;

interface ITechEntryView {
  node: any;
}

const ITechEntryView: React.FC<ITechEntryView> = ({ node }) => {
  const [state, setState] = useState({
    extended: false,
  });

  const toggleSlide = () => setState({ extended: !state.extended });
  return (
    <>
      <tr>
        <td>
          <p>{node.name}</p>
        </td>
        <td>
          <DescriptionText>{node.description}</DescriptionText>
        </td>
        <Date>{node.date}</Date>
        <HoverLabel onClick={toggleSlide}>
          {!state.extended ? "Expand" : "Close"}
        </HoverLabel>
      </tr>

      <TechExtendView node={node} extended={state.extended} />
    </>
  );
};

export default ITechEntryView;
