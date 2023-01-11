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
		<Section style={{ marginBottom: "10%" }} id="skills">
			<SectionDivider style={{ marginBottom: "5%" }} />
			<SectionTitle data-aos="fade-right">Skills</SectionTitle>
			<SectionText data-aos="fade-right">
				During my college years, I had the opportunity to work with a wide
				range of technologies, both in and out of the classroom. In college,
				I focused mainly on Backend development, so I decided to further my
				knowledge by exploring Frontend technologies such as React,
				ReactNative, and Android Studio. Later on, while I was doing a
				Backend Engineering Internship, I had the chance to work with other
				technologies like Golang, AWS, GraphQL, and many more.
			</SectionText>
			<List>
				<ListItem data-aos="fade-right">
					<DiReact size="3rem" color="white" />
					<ListContainer>
						<ListTitle>Front-End</ListTitle>
						<ListParagraph>React, Vue and Typescript</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem data-aos="fade-down">
					<DiPython size="3rem" color="white" />
					<ListContainer>
						<ListTitle>Back-End</ListTitle>
						<ListParagraph>
							Golang, PHP, Python, Java, C, SQL, NoSQL, AWS, GraphQL, New
							Relic and Docker
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
