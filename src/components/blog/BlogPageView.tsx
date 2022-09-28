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
    margin-top: 0rem;
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

const IFrame = styled("iframe")`
  height: auto;
  width: 100%;
  aspect-ratio: 16 / 9;
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
    {data.video && (
      <Image>
        <IFrame
          src={data.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></IFrame>
      </Image>
    )}
    {data.images.map((image: ImageDataLike, index: number) => (
      <Image key={index}>
        <GatsbyImage
          image={getImage(image)}
          alt={`${data.name} ${index}`}
          loading={"eager"}
        />
      </Image>
    ))}
  </>
);

export default BlogPageView;
