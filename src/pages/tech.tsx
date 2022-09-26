import Layout from "../components/layout/Layout";
import TechTable from "../components/tech/TechTable";
import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

interface ITech {
  data: any;
}

const Tech: React.FC<ITech> = ({ data }) => (
  <>
    <Helmet>
      <title>addikala/tech</title>
    </Helmet>
    <Layout page="tech">
      <TechTable data={data} />
    </Layout>
  </>
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
