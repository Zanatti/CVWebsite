import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typed from "react-typed";
import 'react-typed/dist/animatedCursor.css';

class DownloadLink extends React.Component {
  render () {
    return (
      <form action={this.props.src}>
        <Button type="submit">{this.props.children}</Button>
      </form>
    )
  }
}

const Hero = (props) => (
    <div>
      <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to MZS<br />
        </SectionTitle>
        <SectionText style={{color:'black'}}>
          {'- '}
        <Typed
            className="typed-text"
            strings={["If you reached this far, give it a chance and learn a bit about me.", "I'm a portuguese 22 year old Computer Science and Engineering student with a big passion for programming and developing ideas from scratch."]}
            startDelay={2000}
            typeSpeed={30}
            backSpeed={15}
            backDelay={1000}
            showCursor="true"
            cursorChar="|"
          />
        </SectionText>
        <DownloadLink src='https://github.com/Zanatti/CurriculumVitae/raw/main/Curriculum%20Vitae%20-%20Mateus%20Saraiva.pdf' children="Download CV"></DownloadLink>
      </LeftSection>
    </Section>
  </div>

);

export default Hero;