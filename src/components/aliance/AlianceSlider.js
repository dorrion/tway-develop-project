/* eslint-disable */
import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

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
  /* 가상 요소 써보기 */
  display: flex;
  flex-direction: column;

  margin: 0px 21px 0px 3px;
  
  /* margin-right: 30px;/ */
  position: relative;

  &:hover {
    outline: 3px solid ${(props) => props.theme.red};
  }
`;

const IMG = styled.img`
  max-width: 100%;
  width: 380px;
  height: 138px;
`;

const Content = styled.div`
  padding-top: 17px;
  

  width: 380px;
  height: 106px;
`;

const Title = styled.strong`
  font-size: 18px;
  margin-bottom: 8px;
  padding-left: 5px;
`;

const Description = styled.div`
  padding-top: 8px;
  height: 40px;
  font-size: 14px;
  padding-left: 5px;
`;
