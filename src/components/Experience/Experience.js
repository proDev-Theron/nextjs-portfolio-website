import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { experience } from '../../constants/constants';
import { Company, Highlight, Highlights, Period, RoleCard, RoleHeader, RoleList, RoleTitle, Summary, Tag, Tags } from './ExperienceStyles';

const Experience = () => (
  <Section id="experience">
    <SectionDivider divider />
    <SectionTitle>Experience</SectionTitle>
    <SectionText>
      Site reliability and backend engineering for regulated banking platforms in the Philippines.
    </SectionText>
    <RoleList>
      {experience.map((job) => (
        <RoleCard key={`${job.company}-${job.role}`}>
          <RoleHeader>
            <RoleTitle>
              {job.role} <Company>· {job.company}</Company>
            </RoleTitle>
            <Period>{job.period}</Period>
          </RoleHeader>
          <Summary>{job.summary}</Summary>
          {job.highlights.length > 0 && (
            <Highlights>
              {job.highlights.map((h) => (
                <Highlight key={h}>{h}</Highlight>
              ))}
            </Highlights>
          )}
          <Tags>
            {job.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Tags>
        </RoleCard>
      ))}
    </RoleList>
  </Section>
);

export default Experience;
