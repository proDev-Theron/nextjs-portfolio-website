import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillBehanceCircle, AiFillLinkedin } from 'react-icons/ai';

import Logo from '../Logo/Logo';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" aria-label="Theron Bueno, home" style={{ display: 'flex', alignItems: 'center' }}>
        <Logo />
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#experience">Experience</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/proDev-Theron">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/prodev-theron/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.behance.net/prodev-theron/">
          <AiFillBehanceCircle size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
