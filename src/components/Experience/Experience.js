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
    <Section nopadding id="experience">
      <SectionDivider />
      <SectionTitle main>Work Experience</SectionTitle>
      <GridContainer>
        {experience.map(({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TagList>
                { tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>About</ExternalLinks>
            </UtilityList>
          </BlogCard>
      
      ))}
      </GridContainer>
    </Section>
  );
};

export default Experience;