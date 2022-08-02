import ArtView from "../../components/art/ArtPageView";
import { graphql } from "gatsby";
import React from "react";

interface IArtPage {
  data: any;
}

const ArtPage: React.FC<IArtPage> = ({ data }) => {
  return <ArtView data={data.art} />;
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
