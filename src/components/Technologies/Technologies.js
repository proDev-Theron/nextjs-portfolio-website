import React from 'react';
import { FaBell, FaChartLine, FaCloud, FaCode, FaCogs, FaRobot, FaSyncAlt } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const stack = [
  { icon: FaCloud, title: 'Cloud & Containers', tools: 'Linux (RHEL), AWS (EKS, EC2), Azure, Kubernetes, OpenShift, Karpenter, Istio, Docker' },
  { icon: FaCogs, title: 'Infrastructure as Code', tools: 'Terraform, Ansible' },
  { icon: FaSyncAlt, title: 'CI/CD', tools: 'GitLab CI, GitHub Actions, Azure DevOps' },
  { icon: FaChartLine, title: 'Observability', tools: 'Dynatrace, Elastic Stack (ELK), LGTM (Loki, Grafana, Tempo, Mimir)' },
  { icon: FaBell, title: 'Incident Management', tools: 'Squadcast, Salesforce' },
  { icon: FaCode, title: 'Languages', tools: 'Python, Bash, Go, Java (Spring Boot), Node.js' },
  { icon: FaRobot, title: 'AI & AIOps', tools: 'AWS DevOps Agent, Claude, GitHub Copilot, Cursor' },
];

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      What I use to run and observe production systems.
    </SectionText>
    <List>
      {stack.map(({ icon: Icon, title, tools }) => (
        <ListItem key={title}>
          <picture>
            <Icon size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>{title}</ListTitle>
            <ListParagraph>{tools}</ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
