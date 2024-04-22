import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Panel: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Content>{props.children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 20px 0;
`;

const Content = styled.div``;
