import React from 'react';
import { FaChartLine, FaCode, FaServer } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Tools across software engineering, infrastructure, and observability.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Software</ListTitle>
          <ListParagraph>
            Python, Bash, Java, Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaServer size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Infrastructure</ListTitle>
          <ListParagraph>
            Linux, Docker, Kubernetes, AWS, Azure, GitLab CI/CD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaChartLine size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Observability</ListTitle>
          <ListParagraph>
            Dynatrace, Elastic Stack (ELK), Grafana
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
