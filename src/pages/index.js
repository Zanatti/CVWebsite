import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import Skills from '../components/Skills/Skills';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { useEffect, useRef } from 'react';
import { Container } from '../layout/LayoutStyles';
import Lottie from 'lottie-web';

const Home = () => {

  const container = useRef(null)

  useEffect(() => {
    var animate = Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData:require('./programmer.json')
    })
    animate.setSpeed(0.4);
  })

  return (
    <Layout>
        <Section grid>
          <Hero />
          <Container style={{ marginLeft:'30px', marginTop:'-5px', marginRight:'-25px' }} className="container" ref={container}></Container> 
        </Section>
        <Timeline />
        <Skills />
        <Acomplishments />
        <Experience />
    </Layout>
  );
};

export default Home;
