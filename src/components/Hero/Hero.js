import React from "react";
import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Aos from "aos";
import "aos/dist/aos.css";

class DownloadLink extends React.Component {
	render() {
		return (
			<form style={{ marginTop: "50%" }} action={this.props.src}>
				<Button type="submit">{this.props.children}</Button>
			</form>
		);
	}
}

const Hero = (props) => (
	<div style={{ marginBottom: "55%" }}>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle data-aos="fade-right" main center>
					Welcome!
				</SectionTitle>
				<SectionText data-aos="fade-right" style={{ color: "#ffff" }}>
					My name is Mateus Zanatti Saraiva and I'm a portuguese 22 year
					old Software Engineer with a big passion for programming and
					developing ideas from scratch.
				</SectionText>
				<DownloadLink
					src="https://github.com/Zanatti/CurriculumVitae/raw/main/Curriculum%20Vitae%20-%20Mateus%20Saraiva.pdf"
					children="Download CV"
				></DownloadLink>
			</LeftSection>
		</Section>
	</div>
);

export default Hero;
