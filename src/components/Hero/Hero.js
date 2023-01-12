import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Typed from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css";

class DownloadLink extends React.Component {
  render() {
    return (
      <form style={{ marginTop: "40%" }} action={this.props.src}>
        <Button type='submit'>{this.props.children}</Button>
      </form>
    );
  }
}

const Hero = (props) => (
  <div style={{ marginBottom: "10%" }}>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle data-aos='fade-right' main center>
          Welcome!
        </SectionTitle>
        <SectionText style={{ color: "#ffff", height: "200px" }}>
          <Typed
            className='typed-text'
            strings={[
              "My name is Mateus Zanatti Saraiva and I'm a Portuguese Software Engineer.<br/>I'm passionate about developing new, innovative ideas from the ground up and finding creative solutions to challenging problems.",
            ]}
            startDelay={150}
            typeSpeed={35}
            showCursor='true'
            cursorChar='|'
          />
        </SectionText>
        <DownloadLink
          src='https://github.com/Zanatti/CurriculumVitae/raw/main/Curriculum%20Vitae%20-%20Mateus%20Saraiva.pdf'
          children='Download CV'
        ></DownloadLink>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
