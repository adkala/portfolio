import Card from "../components/card";
import {
  Parent,
  Divider,
  Click,
  Text,
  Title,
  Secondary,
  Spacer,
} from "../components/components";
import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import FadeIn from "react-fade-in";
import styled from "styled-components";

interface IProjects {
  data: any;
}

const CardContainer = styled("div")`
  display: grid;
  flex-wrap: wrap;
  grid-gap: 3rem;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
  grid-template-columns: repeat(auto-fill, 19rem);
`;

const Projects: React.FC<IProjects> = ({ data }) => {
  const [state, setState] = useState({
    emailTag: "Email (hover me)",
    category: 0,
  });

  const copyEmail = () => {
    navigator.clipboard.writeText("addikala@berkeley.edu");
    setState({ ...state, emailTag: "Copied" });
  };

  const setCategory = (category: number) => {
    setState({ ...state, category: category });
  };

  return (
    <Parent>
      <FadeIn>
        <Title>Addison Kalanther</Title>
        <Divider />
        <Text>
          Hi! I’m Addison, an EECS (Electrical Engineering and Computer Science)
          student at UC Berkeley. I am currently a software engineering intern
          at Salesforce, Inc, where I work on the product platform team and
          using NLP for content generation. I also perform research at the ROAR
          lab at UC Berkeley, solving perception in the context of autonomous
          racing using computer vision. In my free time, I explore my passion
          for cars, music, fashion, and gaming. Reach out to me through my
          email!
        </Text>
        <Divider />
        <Text>
          <Click>
            <a
              href="https://www.github.com/adkala"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </Click>
          <Spacer />
          •
          <Spacer />
          <Click>
            <a
              href="https://www.linkedin.com/in/addikala"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </Click>
          <Spacer />
          •
          <Spacer />
          <Click
            onMouseEnter={() => {
              setState({ ...state, emailTag: "addikala (@) berkeley.edu" });
            }}
            onMouseLeave={() =>
              setState({ ...state, emailTag: "Email (hover me)" })
            }
            onClick={copyEmail}
          >
            {state.emailTag}
          </Click>
        </Text>
        <Divider />
        <Text>
          <Secondary>Show projects:</Secondary>
          <Spacer />
          <Click
            style={state.category == 0 ? {} : { opacity: 0.6 }}
            onClick={() => setCategory(0)}
          >
            all
          </Click>
          <Spacer />
          <Secondary>•</Secondary>
          <Spacer />
          <Click
            style={state.category == 1 ? {} : { opacity: 0.6 }}
            onClick={() => setCategory(1)}
          >
            tech
          </Click>
          <Spacer />
          <Secondary>•</Secondary>
          <Spacer />
          <Click
            style={state.category == 2 ? {} : { opacity: 0.6 }}
            onClick={() => setCategory(2)}
          >
            misc
          </Click>
        </Text>
        <Divider />
        <CardContainer>
          {data.allProjects.nodes.map((node: any, key: number) =>
            state.category == 0 ||
            (state.category == 1 && node.category == "tech") ||
            (state.category == 2 && node.category == "misc") ? (
              <Card
                title={node.name}
                description={node.description}
                technologies={node.technologies}
                links={node.links}
                category={node.category}
                key={key}
              />
            ) : (
              <></>
            )
          )}
        </CardContainer>
      </FadeIn>
    </Parent>
  );
};

export const query = graphql`
  {
    allProjects {
      nodes {
        name
        description
        technologies
        links {
          title
          link
        }
        category
      }
    }
  }
`;

export default Projects;
