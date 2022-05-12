import React, { useEffect } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ExperienceStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { experience } from '../../constants/constants';
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <Section style={{ marginBottom:'10%' }} nopadding id="experience">
      <SectionDivider />
      <SectionTitle data-aos="fade-right" main>Experience</SectionTitle>
      <GridContainer>
        {experience.map(({ id, image, title, description, tags, source, visit }) => (
          <ExternalLinks href={visit}>
            <BlogCard data-aos="zoom-in" key={id}>
              <Img src={image}/>
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <UtilityList>
              </UtilityList>
            </BlogCard>
          </ExternalLinks>
      ))}
      </GridContainer>
    </Section>
  );
};

export default Experience;