import { Parent, Divider, Click, Text } from "../components/components";
import { graphql, Link } from "gatsby";
import React, { useState } from "react";

interface IProjects {
  data: any;
}

const Projects: React.FC<IProjects> = ({ data }) => {
  const [state, setState] = useState({
    emailTag: "Email",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText("addikala@berkeley.edu");
    setState({ emailTag: "Copied" });
  };

  return (
    <>
      <Text>Addison Kalanther</Text>
      <Divider />
      <Text>
        EECS Student at UC Berkeley. Software engineering intern at Salesforce, Inc. Currently
        researching computer vision and NLP.
      </Text>
      <Divider />
      <Text>
        <Click>
          <a
            href="https://www.linkedin.com/in/addikala"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </Click>
      </Text>
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
      </Text>
      <Text>
        <Click
          onMouseEnter={() => {
            setState({ emailTag: "addikala (@) berkeley.edu" });
          }}
          onMouseLeave={() => setState({ emailTag: "Email" })}
          onClick={copyEmail}
        >
          {state.emailTag}
        </Click>
      </Text>
      <Divider />
      {data.allProjects.nodes.map((node: any, key: number) => (
        <Text key={key}>
          <Link to={"" + node.page}>
            <Click>{node.name}</Click>
          </Link>
        </Text>
      ))}
    </>
  );
};

export const query = graphql`
  {
    allProjects {
      nodes {
        name
        page
      }
    }
  }
`;

export default Projects;
