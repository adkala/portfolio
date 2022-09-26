import ArtEntry from "../components/art/ArtEntryView";
import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

interface IArt {
  data: any;
}

const Art: React.FC<IArt> = ({ data }) => (
  <>
    <Helmet>
      <title>addikala/art</title>
    </Helmet>
    {data.allArt.nodes.map((node: any, index: number) => (
      <ArtEntry node={node} key={index} />
    ))}
  </>
);

export const query = graphql`
  {
    allArt {
      nodes {
        page
        name
        description
        date
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
        pageSlug: gatsbyPath(filePath: "/art/{art.page}")
      }
    }
  }
`;

export default Art;
