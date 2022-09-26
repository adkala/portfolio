import ArtView from "../../components/art/ArtPageView";
import Layout from "../../components/layout/Layout";
import { graphql } from "gatsby";
import React from "react";

interface IArtPage {
  data: any;
}

const ArtPage: React.FC<IArtPage> = ({ data }) => {
  return (
    <Layout page="art">
      <ArtView data={data.art} />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    art(id: { eq: $id }) {
      name
      date
      description
      images {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export default ArtPage;
