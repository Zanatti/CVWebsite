import { useState, useEffect } from 'react';
import Theme from '../styles/theme';
import Typed from "react-typed";
import { Container } from '../layout/LayoutStyles';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 7500)
  }, [])

  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className='App'>
      {
        loading ?
        <Theme>
          <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            background: {
              color: "#444444"
            },
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: {
                  enable: true,
                  mode: "repulse",
                  parallax: { enable: false, force: 60, smooth: 10 }
                },
                resize: true
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 }
              }
            },
            particles: {
              color: { value: "#ffffff" },
              move: {
                direction: "none",
                enable: true,
                outModes: "out",
                random: false,
                speed: 0.8,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 80
              },
              opacity: {
                animation: {
                  enable: true,
                  speed: 0.05,
                  sync: true,
                  startValue: "max",
                  count: 1,
                  destroy: "min"
                },
                value: {
                  min: 0,
                  max: 0.5
                }
              },
              shape: {
                type: "circle"
              },
              size: {
                value: { min: 1, max: 5 }
              }
            }
          }}
        />
          <Container style={{ position:'absolute', top:'40%', left:'17%'}}>
            <Typed
              style={{  
              color:'white', 
              fontFamily:'Proxima Nova',
              fontWeight:'800',
              fontSize:'50px',
            }}
              className="typed-text"
              strings={['"The way to get started is to quit talking and begin doing."<br/> - Walt Disney']}
              startDelay={500}
              typeSpeed={60}
              showCursor="false"
              cursorChar=''
            />
          </Container>
        </Theme>
      :
      <>
        <title>MZS | Developer</title>
        <Theme>
          <Component  {...pageProps} /> 
        </Theme>
      </>
      }
    </div>
  );
}