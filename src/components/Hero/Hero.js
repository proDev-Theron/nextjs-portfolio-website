import React from 'react';
import Link from "next/link";

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
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
          I help companies and individuals share their ideas and products online by developing websites and other necessary cloud solutions they need.
        </SectionText>
        <Link href="/[Résumé] Theron Bueno - Software Engineer.pdf">
        <Button> Download Résumé </Button>
        </Link>

      </LeftSection>
    </Section>
  </>
);

export default Hero;