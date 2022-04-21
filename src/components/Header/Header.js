import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { MdDesktopMac } from 'react-icons/md';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
    <Div1>
      <Link href ="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white' , marginBottom: '15px' }}>
          <MdDesktopMac size="3rem" /> <Span>MZS</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="#experience">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Zanatti">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mateus-zanatti-saraiva-5b9591143/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
    </Container>
  </div>
);

export default Header;
