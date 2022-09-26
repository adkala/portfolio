import BlogEntry from "../components/blog/BlogEntryView";
import Layout from "../components/layout/Layout";
import { graphql } from "gatsby";
import React from "react";

interface IBlog {
  data: any;
}

const Blog: React.FC<IBlog> = ({ data }) => (
  <Layout page="blog">
    {data.allBlog.nodes.map((node: any, index: number) => (
      <BlogEntry node={node} key={index} />
    ))}
  </Layout>
);

export const query = graphql`
  {
    allBlog {
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
        pageSlug: gatsbyPath(filePath: "/blog/{blog.page}")
      }
    }
  }
`;

export default Blog;
