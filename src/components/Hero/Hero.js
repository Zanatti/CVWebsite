import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Mateus's Website
      </SectionTitle>
      <SectionText>
        If you reached this far, give it a chance and learn a bit about me. <br />
        I'm a portuguese 22 year old Computer Science and Engineering student with a big passion for developing ideas from scratch.
      </SectionText>
      <Button onClick={ () => window.location = 'https://google.com' }>About Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;