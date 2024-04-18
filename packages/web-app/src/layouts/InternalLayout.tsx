import React from 'react';
import { Outlet } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import {
  MdAdd,
  MdOutlineHome,
  MdOutlineOutput,
  MdOutlineInput,
} from 'react-icons/md';

export const InternalLayout: React.FC = () => {
  const GlobalStyle = createGlobalStyle`
    body {
      font-family: Inter,Helvetiva,Arial,sans-serif;
      margin: 0;
      overflow: hidden;
    }
  `;

  const links = [
    { title: 'Home', url: '/', icon: <MdOutlineHome /> },
    { title: 'Give feedback', url: '/feedbacks/new', icon: <MdAdd /> },
    {
      title: 'Feedbacks given',
      url: '/feedbacks/given',
      icon: <MdOutlineOutput />,
    },
    {
      title: 'Feedbacks received',
      url: '/feedbacks/received',
      icon: <MdOutlineInput />,
    },
  ];

  return (
    <Wrapper>
      <GlobalStyle />
      <Sidebar>
        <AppName>Team Feedback_</AppName>
        <nav>
          <SidebarLinksList>
            {links.map((link) => (
              <SidebarLinkWrapper key={link.url}>
                {link.icon}
                <SidebarLink href={link.url}>{link.title}</SidebarLink>
              </SidebarLinkWrapper>
            ))}
          </SidebarLinksList>
        </nav>
      </Sidebar>
      <Content>
        <Header></Header>
        <Outlet />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
`;

const AppName = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: #000e38;
  margin-left: 20px;
`;

const Header = styled.header`
  grid-column: 1 / span 2;
  padding: 0 20px;
`;

const Sidebar = styled.aside`
  background-color: #00e5a4;
  width: 100%;
  height: 100vh;
`;

const SidebarLinksList = styled.ul`
  list-style: none;
  padding: 0 20px;
  margin-top: 50px;
`;

const SidebarLinkWrapper = styled.li`
  display: flex;
  gap: 10px;
`;

const SidebarLink = styled.a`
  display: block;
  margin-bottom: 20px;
  text-decoration: none;
  color: #333;
`;

const Content = styled.main`
  padding: 20px;
  overflow-y: auto;
  height: calc(100vh - 40px);
`;
