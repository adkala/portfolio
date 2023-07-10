import React from "react";
import styled from "styled-components";

interface ICard {
  title: string;
  description: string;
  technologies: string[];
  links: any[];
  category: string;
}

const Paper = styled(`div`)`
  width: 16rem;
  height: 16rem;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled("p")`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Description = styled("p")`
  font-size: 0.875rem;
  line-height: 1.75rem;
`;

const Technologies = styled("p")`
  color: white;
  font-size: 0.875rem;
  opacity: 0.6;
`;

const Category = styled("span")`
  color: white;
  font-size: 0.875rem;
  opacity: 0.38;
`;

const Click = styled(Category)`
  opacity: 0.38;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Spacer = styled(Category)`
  margin: 0 0.75rem 0 0.75rem;
`;

const Card: React.FC<ICard> = ({
  title,
  description,
  technologies,
  links,
  category,
}) => (
  <Paper>
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>

    <div>
      <Technologies>
        {technologies
          .slice(1)
          .reduce(
            (accumulator, currentValue) =>
              accumulator
                .concat(<Spacer>•</Spacer>)
                .concat(<>{currentValue}</>),
            [<>{technologies[0]}</>]
          )}
      </Technologies>
      <p>
        <Category>{category}</Category>
        {links && links.length > 0 && <Spacer>•</Spacer>}
        {links?.slice(1).reduce(
          (accumulator, currentValue) =>
            accumulator.concat(<Spacer>•</Spacer>).concat(
              <Click>
                <a href={currentValue.link} target="_blank" rel="noreferrer">
                  {currentValue.title.toLowerCase()}
                </a>
              </Click>
            ),
          [
            <Click>
              <a href={links[0].link} target="_blank" rel="noreferrer">
                {links[0].title.toLowerCase()}
              </a>
            </Click>,
          ]
        )}
      </p>
    </div>
  </Paper>
);

export default Card;
