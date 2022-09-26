import { styled } from "@mui/material/styles";
import { Link } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React from "react";

const Content = styled("div")`
  margin-top: 5.25rem;
  max-height: 100%;
  padding: 0 1.25rem;
  @media (max-width: 1000px) {
    padding: 0 2rem;
  }
`;

const Back = styled("div")`
  margin-bottom: 1.5rem;
`;

const BackLink = styled(Link)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Name = styled("p")`
  font-weight: 400;
`;

const Date = styled("p")`
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

const Description = styled("p")`
  margin-bottom: 4.5rem;
`;

const Image = styled("div")`
  margin-bottom: 4.5rem;
  width: 100%;
  @media (min-width: 1000px) {
    padding: 0 1.25rem;
  }
`;

interface IBlogPageView {
  data: any;
}

const BlogPageView: React.FC<IBlogPageView> = ({ data }) => (
  <>
    <Content>
      <Back>
        <BackLink to="/blog">Back</BackLink>
      </Back>
      <Name>{data.name}</Name>
      <Date>{data.date}</Date>
      <Description>{data.description}</Description>
    </Content>
    {data.images.map((image: ImageDataLike, index: number) => (
      <Image key={index}>
        <GatsbyImage image={getImage(image)} alt={`${data.name} ${index}`} />
      </Image>
    ))}
  </>
);

export default BlogPageView;
