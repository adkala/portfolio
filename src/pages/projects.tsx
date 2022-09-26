import Layout from "../components/layout/Layout";
import ProjectTable from "../components/projects/ProjectTable";
import { graphql } from "gatsby";
import React from "react";

interface IProjects {
  data: any;
}

const Projects: React.FC<IProjects> = ({ data }) => (
  <Layout page="projects">
    <ProjectTable data={data} />
  </Layout>
);

export const query = graphql`
  {
    allProjects {
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

export default Projects;
