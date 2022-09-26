import { styled } from "@mui/material/styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const Container = styled("div")`
  padding: 0.75rem 3rem 1.75rem 3rem;
  max-width: 40rem;
  @media (max-width: 600px) {
    padding: 0.75rem 0rem 1.75rem 0rem;
  }

  ${(props: { slide?: string }) =>
    props.slide && props.slide == "true"
      ? "-ms-transform: scaleY(0); -webkit-transform: scaleY(0); transform: scaleY(0); height: 0; padding-top: 0; padding-bottom: 0;"
      : ""}
`;

const Bold = styled("p")`
  font-weight: 400;
`;

const Margin = styled("p")`
  margin-bottom: 1.25rem;
`;

const BoldMargin = styled(Margin)`
  font-weight: 400;
`;

const Img = styled("div")`
  width: 32rem;
  max-height: 100%;
  @media (max-width: 675px) {
    width: inherit;
  }
`;

const ImgMargin2x = styled(Img)`
  margin-bottom: 2.5rem;
`;

const HoverSpan = styled("span")`
  cursor: pointer;
`;

interface IProjectExtendView {
  node: any;
  extended: boolean;
}

const ProjectExtendView: React.FC<IProjectExtendView> = ({
  node,
  extended,
}) => (
  <>
    <tr>
      <td colSpan={4}>
        <Container slide={!extended ? "true" : "false"}>
          <Bold>{node.name}</Bold>
          <BoldMargin>{node.date}</BoldMargin>
          <Margin>{node.description}</Margin>
          <Margin>
            Technologies:{" "}
            {node.technologies.slice(0, -1).map((tech: any, key: number) => (
              <span key={key}>{tech}, </span>
            ))}
            {node.technologies[node.technologies.length - 1]}
          </Margin>
          <Margin>
            Links:{" "}
            {node.links.length > 1
              ? node.links.slice(0, -1).map((link: any, key: number) => (
                  <HoverSpan key={key}>
                    <a
                      href={"http://" + link.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.title}
                    </a>
                    ,{" "}
                  </HoverSpan>
                ))
              : ""}
            {
              node.links
                .slice(node.links.length - 1, node.links.length)
                .map((link: { title: string; link: string }, key: number) => (
                  <HoverSpan key={key}>
                    <a
                      href={"http://" + link.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.title}
                    </a>
                  </HoverSpan>
                )) /* Work around for odd undefined error for container data type */
            }
          </Margin>
          {node.images.length > 1
            ? node.images.slice(0, -1).map((image: any, key: number) => (
                <ImgMargin2x key={key}>
                  <GatsbyImage
                    image={getImage(image)}
                    alt={`${node.name} ${key}`}
                    loading={"eager"}
                  />
                </ImgMargin2x>
              ))
            : ""}
          <Img>
            <GatsbyImage
              image={getImage(node.images[node.images.length - 1])}
              alt={`${node.name} ${node.images.length - 1}`}
              loading={"eager"}
            />
          </Img>
        </Container>
      </td>
    </tr>
  </>
);

export default ProjectExtendView;
