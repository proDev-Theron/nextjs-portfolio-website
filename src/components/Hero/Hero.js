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
        My mission in life is to make the world a better place by pursuing my calling with passion and skills that comes with God's favor. 
        </SectionText>
        <Link href="/[Résumé] Theron Adrianne Bueno - 3rd Year Computer Engineering Student, Full-Stack Developer, Multimedia Artist.pdf">
        <Button> Download Résumé </Button>
        </Link>

      </LeftSection>
    </Section>
  </>
);

export default Hero;