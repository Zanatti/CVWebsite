import React from 'react';

import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
const data = [
  { number: 37.5, text: 'Android Studio Udemy Course', download: "https://github.com/Zanatti/CV-Certificates/raw/main/Certificado%20Android%20Studio%20Udemy.pdf", filename:"Certificado Android Studio Udemy"},
  { number: 38.5, text: 'React Native + Hooks Udemy Course', download: "https://github.com/Zanatti/CV-Certificates/raw/main/Certificado%20React%20Native%20%2BHooks%20Udemy.pdf", filename:"Certificado React Native + Hooks Udemy"},
];

class DownloadLink extends React.Component {
  render () {
    return (
      <form action={this.props.download}>
        <button type="submit" style={{ padding:'0', border:'none', background:'none'}}>
          <Box data-aos="flip-right" key={this.props.index}>
            <BoxNum>{this.props.number} hours</BoxNum>
            <BoxText>{this.props.text}</BoxText>
          </Box>
        </button>
      </form>
    )
  }
}

const Acomplishments = () => (
  <Section style={{ marginBottom:'10%' }} >
    <SectionDivider style={{ marginBottom:'5%' }}/>
    <SectionTitle>Certificates</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <DownloadLink number={card.number} text={card.text} download={card.download} index={index}></DownloadLink>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
