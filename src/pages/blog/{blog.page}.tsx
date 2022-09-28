import BlogView from "../../components/blog/BlogPageView";
import Layout from "../../components/layout/Layout";
import { graphql } from "gatsby";
import React from "react";

interface IBlogPage {
  data: any;
}

const BlogPage: React.FC<IBlogPage> = ({ data }) => {
  return (
    <Layout page="blog">
      <BlogView data={data.blog} />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    blog(id: { eq: $id }) {
      name
      date
      description
      images {
        childImageSharp {
          gatsbyImageData
        }
      }
      video
    }
  }
`;

export default BlogPage;
