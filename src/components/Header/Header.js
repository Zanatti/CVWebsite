import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdDesktopMac } from 'react-icons/md';
import { Container, Span, Div1, Div3, SocialIcons } from './HeaderStyles';


const Header = () =>  (
  <div>
    <Container >
    <Div1>
      <Link href='javascript:window.location.reload(true)'>
        <a style={{ lineHeight:'10px' }}>
          <MdDesktopMac color="white" size="3rem"/><Span>MZS</Span>
        </a>
      </Link>
    </Div1>
    <Div3>
      <li>
        <Link href="javascript:window.location.reload(true)">
        <a>
          <Span style={{fontSize:'2rem'}}>Contact Me</Span>
        </a>
        </Link>
      </li>
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
