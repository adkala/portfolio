import Layout from "../components/layout/Layout";
import TechTable from "../components/tech/TechTable";
import { graphql } from "gatsby";
import React from "react";

interface ITech {
  data: any;
}

const Tech: React.FC<ITech> = ({ data }) => (
  <Layout>
    <TechTable data={data} />
  </Layout>
);

export const query = graphql`
  {
    allTech {
      nodes {
        name
        description
        date
        technologies
        links {
          title
          link
        }
        images {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Tech;
