import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br />
        Welcome to my personal portfolio!
      </SectionTitle>
      <SectionText>
        I'm an aspiring full-stack web developer and student of UofT Coding Bootcamp.
      </SectionText>
      {/* <Button onClick={() => window.location = 'crawfordkevin101@gmail.com'}>Learn More</Button> */}
    </LeftSection>

  </Section>
);

export default Hero;