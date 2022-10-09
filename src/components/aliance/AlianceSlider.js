/* eslint-disable */
import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import data from 'data/afl_list.json';

export default function Slide({title, desc, img}) {
  return (
    <Container>
      <IMG src={img} />
      <Content>
        <Title>{title}</Title>
        <Description>{desc}</Description>
      </Content>
    </Container>
  );
}

const Container = styled.a`
  display: flex;
  flex-direction: column;
`;

const IMG = styled.img`
  width: 380px;
  height: 138px;
`;

const Content = styled.div`
  padding: 17px 10px 15px 15px;
  width: 380px;
  height: 106px;
`;

const Title = styled.strong`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Description = styled.div`
  height: 40px;
  font-size: 18px;
`;
