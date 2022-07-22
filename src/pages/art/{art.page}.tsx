import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/Layout";
import ArtView from "../../components/art/ArtPageView";

interface IArtPage {
  data: any;
}

const ArtPage: React.FC<IArtPage> = ({ data }) => {
  return (
    <Layout>
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
