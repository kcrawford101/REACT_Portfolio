import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div3, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style= {{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size='3rem' /><Span>Kevin's Portfolio</Span>
        </a>      
      </Link>
    </Div1>    
    <Div3>
      <SocialIcons href='https://github.com/kcrawford101'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/kcrawford117/'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>      
    </Div3>
  </Container>
);

export default Header;
