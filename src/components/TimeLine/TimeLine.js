import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";
import { BrowserView, MobileView } from "react-device-detect";
import Aos from "aos";
import "aos/dist/aos.css";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Section style={{ marginBottom: "10%" }} id='about'>
      <SectionDivider style={{ marginBottom: "5%" }} />
      <SectionTitle data-aos='fade-right'>About Me</SectionTitle>
      <SectionText data-aos='fade-right'>
        Currently residing in Bern, Switzerland, I work as a Software Engineer
        at Swisscom. Recently, I returned from a solo journey through Southeast
        Asia, which offered a remarkable experience. In addition to my
        professional endeavors, I possess a wide array of interests that fuel my
        passion. Mixed Martial Arts captivates my attention, as I admire the
        discipline and dedication exhibited by athletes as well as the
        complexity of each martial art. Additionally, I harbor an unending
        curiosity for the Space Exploration, constantly seeking to expand my
        knowledge about the cosmos. Music holds a special place in my heart, and
        I love the power it has to evoke emotions and connect people. Personal
        Finance is another area of interest for me, as I strive to develop a
        solid understanding of financial principles and make informed decisions
        about money management. Finally, Cinema captivates my imagination, and I
        find great joy in exploring various genres and cinematic masterpieces.
      </SectionText>
      <BrowserView>
        <CarouselContainer
          data-aos='fade-right'
          ref={carouselRef}
          onScroll={handleScroll}
        >
          <>
            {TimeLineData.map((item, index) => (
              <CarouselMobileScrollNode
                key={index}
                final={index == TOTAL_CAROUSEL_COUNT - 1}
              >
                <CarouselItem
                  index={index}
                  id={`carousel_item-${index}`}
                  active={activeItem}
                  onClick={(e) => handleClick(e, index)}
                >
                  <CarouselItemTitle>
                    {item.year}
                    <CarouselItemImg
                      width='208'
                      height='6'
                      viewBox='0 0 208 6'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z'
                        fill='url(#paint0_linear)'
                        fill-opacity='0.33'
                      />
                      <defs>
                        <linearGradient
                          id='paint0_linear'
                          x1='-4.30412e-10'
                          y1='0.5'
                          x2='208'
                          y2='0.500295'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stop-color='white' />
                          <stop
                            offset='0.79478'
                            stop-color='white'
                            stop-opacity='0'
                          />
                        </linearGradient>
                      </defs>
                    </CarouselItemImg>
                  </CarouselItemTitle>
                  <CarouselItemText>{item.text}</CarouselItemText>
                </CarouselItem>
              </CarouselMobileScrollNode>
            ))}
          </>
        </CarouselContainer>
      </BrowserView>
      <MobileView>
        <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
          <>
            {TimeLineData.map((item, index) => (
              <CarouselMobileScrollNode
                key={index}
                final={index == TOTAL_CAROUSEL_COUNT - 1}
              >
                <CarouselItem
                  index={index}
                  id={`carousel_item-${index}`}
                  active={activeItem}
                  onClick={(e) => handleClick(e, index)}
                >
                  <CarouselItemTitle>
                    {item.year}
                    <CarouselItemImg
                      width='208'
                      height='6'
                      viewBox='0 0 208 6'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z'
                        fill='url(#paint0_linear)'
                        fill-opacity='0.33'
                      />
                      <defs>
                        <linearGradient
                          id='paint0_linear'
                          x1='-4.30412e-10'
                          y1='0.5'
                          x2='208'
                          y2='0.500295'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stop-color='white' />
                          <stop
                            offset='0.79478'
                            stop-color='white'
                            stop-opacity='0'
                          />
                        </linearGradient>
                      </defs>
                    </CarouselItemImg>
                  </CarouselItemTitle>
                  <CarouselItemText>{item.text}</CarouselItemText>
                </CarouselItem>
              </CarouselMobileScrollNode>
            ))}
          </>
        </CarouselContainer>
      </MobileView>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type='button'
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
