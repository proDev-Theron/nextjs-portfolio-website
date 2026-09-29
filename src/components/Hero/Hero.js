import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there! I'm, <br />
          Theron Adrianne Bueno
        </SectionTitle>
        <SectionText>
          Site Reliability Engineer for banking platforms, with a software engineering and SRE background at ING Bank. Focused on observability and dependable services.
        </SectionText>

      </LeftSection>
    </Section>
  </>
);

export default Hero;