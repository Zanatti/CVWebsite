import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
	Section,
	SectionTitle,
	SectionDivider,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
const data = [
	{
		number: 37.5,
		text: "Android Studio Udemy Course",
		download:
			"https://github.com/Zanatti/CV-Certificates/raw/main/Certificado%20Android%20Studio%20Udemy.pdf",
		filename: "Certificado Android Studio Udemy",
	},
	{
		number: 38.5,
		text: "React Native + Hooks Udemy Course",
		download:
			"https://github.com/Zanatti/CV-Certificates/raw/main/Certificado%20React%20Native%20%2BHooks%20Udemy.pdf",
		filename: "Certificado React Native + Hooks Udemy",
	},
	{
		number: 45.5,
		text: "Golang Udemy Course",
		download:
			"https://github.com/Zanatti/CV_and_Certificates/raw/main/Certificado%20Google's%20Programming%20Language.pdf",
		filename: "Certificado Golang Udemy",
	},
	{
		number: 7,
		text: "API and Web Service Introduction Udemy Course",
		download:
			"https://github.com/Zanatti/CV_and_Certificates/raw/main/Certificado%20API%20Intro.pdf",
		filename: "Certificado API Introduction",
	},
	{
		number: 3.5,
		text: "AWS Essentials Udemy Course",
		download:
			"https://github.com/Zanatti/CV_and_Certificates/raw/main/Certificado%20AWS%20Essentials.pdf",
		filename: "Certificado AWS Essentials",
	},
	{
		number: 4.5,
		text: "Docker for the Absolute Beginner Udemy Course",
		download:
			"https://github.com/Zanatti/CV_and_Certificates/raw/main/Certificado%20Docker.pdf",
		filename: "Certificado Docker - DevOps",
	},
	{
		number: 2.5,
		text: "New Relic APM Udemy Course",
		download:
			"https://github.com/Zanatti/CV_and_Certificates/raw/main/Certificado%20NewRelic.pdf",
		filename: "Certificado New Relic",
	},
	{
		number: 18.5,
		text: "PHP Object Oriented Programming Udemy Course",
		download:
			"https://github.com/Zanatti/CV_and_Certificates/raw/main/Certificado%20PHP%20OOP.pdf",
		filename: "Certificado PHP OOP",
	},
	{
		number: 6.5,
		text: "Practical PHP Master the Basics Udemy Course",
		download:
			"https://github.com/Zanatti/CV_and_Certificates/raw/main/Certificado%20PHP.pdf",
		filename: "Certificado Practical PHP",
	},
	{
		number: 5.5,
		text: "GitLab CI/CD and DevOps Udemy Course",
		download:
			"https://github.com/Zanatti/CV_and_Certificates/raw/main/Certificado%20Pipelines%20and%20CICD.pdf",
		filename: "Certificado Pipelines + CI/CD",
	},
	{
		number: 6.5,
		text: "REST API development Udemy Course",
		download:
			"https://github.com/Zanatti/CV_and_Certificates/raw/main/Certificado%20RestAPI.pdf",
		filename: "Certificado REST API",
	},
	{
		number: 3,
		text: "Terraform for AWS Udemy Course",
		download:
			"https://github.com/Zanatti/CV_and_Certificates/raw/main/Certificado%20Terraform.pdf",
		filename: "Certificado Terraform",
	},
];

class DownloadLink extends React.Component {
	render() {
		return (
			<form action={this.props.download}>
				<button
					type="submit"
					style={{ padding: "0", border: "none", background: "none" }}
				>
					<Box data-aos="flip-right" key={this.props.index}>
						<BoxNum>{this.props.number} hours</BoxNum>
						<BoxText>{this.props.text}</BoxText>
					</Box>
				</button>
			</form>
		);
	}
}

const Acomplishments = () => (
	<Section style={{ marginBottom: "40%" }}>
		<SectionDivider style={{ marginBottom: "5%" }} />
		<SectionTitle data-aos="fade-right">Certificates</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<DownloadLink
					number={card.number}
					text={card.text}
					download={card.download}
					index={index}
				></DownloadLink>
			))}
		</Boxes>
	</Section>
);

export default Acomplishments;
