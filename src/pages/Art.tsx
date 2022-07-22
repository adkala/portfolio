import React from "react";
import Layout from "../components/layout/Layout";
import { graphql } from "gatsby";
import ArtEntry from "../components/art/ArtEntryView";

interface IArt {
  data: any;
}

const Art: React.FC<IArt> = ({ data }) => (
  <Layout>
    <>
      {data.allArt.nodes.map((node: any) => (
        <ArtEntry node={node} />
      ))}
    </>
  </Layout>
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
