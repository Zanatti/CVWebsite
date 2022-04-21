import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import Skills from '../components/Skills/Skills';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Particles from "react-tsparticles";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      <BgAnimation/>
      </Section>
      <Experience />
      <Skills />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
