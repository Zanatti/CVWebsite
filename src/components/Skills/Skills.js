import React, { useEffect } from 'react';
import { DiAndroid, DiGithub, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SkillsStyles';
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () =>  {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    
    <Section style={{marginBottom:'10%'}} id="skills">
      <SectionDivider style={{ marginBottom:'5%' }}/>
      <SectionTitle>Skills</SectionTitle>
      <SectionText data-aos="fade-right">
        Through my college years I've worked with a range of technologies inside and outside of academical projects.
        In college i mostly worked in Back-End development so i took it to myself to explore Front-End technologies such as React, ReactNative and Android Studio.
      </SectionText>
      <List>
        <ListItem data-aos="fade-right">
          <DiReact size="3rem" color="white"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              React and Vue
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem data-aos="fade-down">
          <DiPython size="3rem" color="white"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Python, Java, C, MongoDB and MySql
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem data-aos="fade-left">
          <DiAndroid size="3rem" color="white"/>
          <ListContainer>
            <ListTitle>Mobile</ListTitle>
            <ListParagraph>
              React Native and Android Studio
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem data-aos="fade-right">
          <DiZend size="3rem" color="white"/>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem data-aos="fade-left">
          <DiGithub size="3rem" color="white"/>
          <ListContainer>
            <ListTitle>Project Development</ListTitle>
            <ListParagraph>
              Git and GitHub and Scrum
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Skills;
