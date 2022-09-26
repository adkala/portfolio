import { styled } from "@mui/material/styles";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const ImageTitle = styled("div")`
  display: flex;
  justify-content: flex-end;
  padding: 2.5rem 3rem;
  @media (max-width: 1000px) {
    padding: 1rem 2.5rem;
  }
`;

const Pointer = styled("p")`
  cursor: pointer;
`;

interface IBlogEntryView {
  node: any;
}

const BlogEntryView: React.FC<IBlogEntryView> = ({ node }) => (
  <div>
    <Link to={node.pageSlug}>
      <GatsbyImage image={getImage(node.thumbnail)} alt={node.name} />
    </Link>
    <ImageTitle>
      <Link to={node.pageSlug}>
        <Pointer>
          {node.name} - {node.date}
        </Pointer>
      </Link>
    </ImageTitle>
  </div>
);

export default BlogEntryView;