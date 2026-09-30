import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { certifications } from '../../constants/constants';

const Accomplishments = () => (
<Section nopadding id="certifications">
    <SectionTitle main>Recognitions</SectionTitle>
    <GridContainer>
      {certifications.map((p, i) => {
        return (
          <BlogCard key={i}>
          {p.image && <Img src={p.image} />}
            <TitleContent>
              <HeaderThree $title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>

            <UtilityList>
              <ExternalLinks href={p.details}>Details</ExternalLinks>
              {p.verify && <ExternalLinks href={p.verify}>Verify</ExternalLinks>}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Accomplishments;
