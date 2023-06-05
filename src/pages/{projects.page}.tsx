import { Parent, Divider, Click, Text, Image } from "../components/components";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React from "react";
import FadeIn from "react-fade-in";

interface IPage {
  data: any;
}

const Page: React.FC<IPage> = ({ data }) => (
  <Parent>
      <Text>
        <Link to="/">
          <Click>Back</Click>
        </Link>
      </Text>
      <Divider />
      <Text>{data.projects.name}</Text>
      <Text>{data.projects.date}</Text>
      {data.projects.description.map((desc: string, index: number) => (
        <>
          <Divider />
          <Text key={index}>{desc}</Text>
        </>
      ))}
      {data.projects.technologies && (
        <>
          <Divider />
          <Text>
            Technologies used:{" " + data.projects.technologies.join(", ")}
          </Text>
        </>
      )}
      {data.projects.links && (
        <>
          <Divider />
          <Text>
            Links:{" "}
            {data.projects.links.length > 1 &&
              data.projects.links
                .slice(0, -1)
                .map((link: { title: string; link: string }, index: number) => (
                  <span>
                    <a
                      href={"https://" + link.link}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    >
                      {link.title}
                    </a>
                    ,{" "}
                  </span>
                ))}
            <span>
              <a
                href={
                  "https://" +
                  data.projects.links[data.projects.links.length - 1].link
                }
                target="_blank"
                rel="noreferrer"
              >
                {data.projects.links[data.projects.links.length - 1].title}
              </a>
            </span>
          </Text>
        </>
      )}
      {data.projects.video && (
        <>
          <Divider />
          <Divider />
          <Image>
            <iframe
              src={data.projects.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "16/9",
                backgroundColor: "black",
              }}
            ></iframe>
          </Image>
        </>
      )}
      {data.projects.images &&
        data.projects.images.map((image: ImageDataLike, index: number) => (
          <>
            <Divider />
            <Divider />
            <Image key={index}>
              <GatsbyImage
                image={getImage(image)}
                alt={`${data.name} ${index}`}
                loading={"eager"}
              />
            </Image>
          </>
        ))}
  </Parent>
);

export const query = graphql`
  query ($id: String!) {
    projects(id: { eq: $id }) {
      page
      name
      date
      description
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
      video
    }
  }
`;

export default Page;
