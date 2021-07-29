import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>        
        Welcome to my personal portfolio!
      </SectionTitle>
      <SectionText>
        I'm an aspiring full-stack web developer and student of UofT Coding Bootcamp.
      </SectionText>      
    </LeftSection>

  </Section>
);

export default Hero;