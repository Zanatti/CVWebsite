import React, { useEffect } from "react";
import { DiAndroid, DiGithub, DiPython, DiReact, DiZend } from "react-icons/di";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./SkillsStyles";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<Section style={{ marginBottom: "40%" }} id="skills">
			<SectionDivider style={{ marginBottom: "5%" }} />
			<SectionTitle data-aos="fade-right">Skills</SectionTitle>
			<SectionText data-aos="fade-right">
				Through my college years I've worked with a range of technologies
				inside and outside of academical projects. In college I mostly
				worked in Back-End development so I took it to myself to explore
				Front-End technologies such as React, ReactNative and Android
				Studio. Later on, when I started a Backend Engineering internship I
				worked with more cutting-edge technologies such as Golang and AWS.
			</SectionText>
			<List>
				<ListItem data-aos="fade-right">
					<DiReact size="3rem" color="white" />
					<ListContainer>
						<ListTitle>Front-End</ListTitle>
						<ListParagraph>React and Vue</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem data-aos="fade-down">
					<DiPython size="3rem" color="white" />
					<ListContainer>
						<ListTitle>Back-End</ListTitle>
						<ListParagraph>
							Golang, PHP, Python, Java, C, MySQL, AWS and Docker
						</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem data-aos="fade-left">
					<DiAndroid size="3rem" color="white" />
					<ListContainer>
						<ListTitle>Mobile</ListTitle>
						<ListParagraph>React Native and Android Studio</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem data-aos="fade-right">
					<DiZend size="3rem" color="white" />
					<ListContainer>
						<ListTitle>UI/UX</ListTitle>
						<ListParagraph>Figma</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem data-aos="fade-left">
					<DiGithub size="3rem" color="white" />
					<ListContainer>
						<ListTitle>Project Development</ListTitle>
						<ListParagraph>
							Git, GitHub, GitLab, Scrum and Kanban
						</ListParagraph>
					</ListContainer>
				</ListItem>
			</List>
		</Section>
	);
};

export default Skills;
