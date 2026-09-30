import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Cta, CtaRow, Kicker, LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there! I'm, <br />
          Theron Adrianne Bueno
        </SectionTitle>
        <Kicker>Site Reliability Engineer · Kubernetes · AWS · Azure · Observability</Kicker>
        <SectionText>
          SRE at a digital bank, running production banking services on AWS and Kubernetes. Previously SRE and backend engineer at ING.
        </SectionText>
        <CtaRow>
          <Cta $primary href="#experience">View experience</Cta>
          <Cta href="https://www.linkedin.com/in/prodev-theron/">LinkedIn</Cta>
          <Cta href="mailto:prodev.theron@gmail.com">Email me</Cta>
        </CtaRow>
      </LeftSection>
    </Section>
  </>
);

export default Hero;