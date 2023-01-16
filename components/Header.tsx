import React from 'react';
import styled from 'styled-components';
import { headerHeight } from '../styles/globalStyles';
import Link from 'next/link';

const Header: React.FC<{}> = () => {
  return (
    <HeaderContainer>
      {/* <Logo></Logo> */}
      <Title href="/" role="title">
        Gains Supply
      </Title>
      <HeaderLinks>
        <NavLink href="/all-posts">Posts</NavLink>
        <NavLink href="/subscribe">subscibe</NavLink>
      </HeaderLinks>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.nav`
  position: fixed;
  height: ${headerHeight};
  width: 100%;
  display: flex;
  background-color: #ffe402;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Link)`
  font-size: 24px;
  color: black;
  line-height: 0;
`;

const HeaderLinks = styled.div``;

const NavLink = styled(Link)``;

export default Header;
