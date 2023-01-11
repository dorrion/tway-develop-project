/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';

import Button from './Button';
import AfflImage from './AfflImage';
import Carousel from './Carousel';
import theme from 'data/theme';
import data from 'data/afl_list.json';

const AlianceTitle = styled.h1`
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 50px 0;
  width: 100%;
  background-color: #f3f3f3;
`;

const TopWrapper = styled.div`
  display: flex;
  width: 1200px;
  height: 210px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin: 0 auto;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  height: 368px;

  margin: 0 auto;
`;

export default function AfflIcon() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <AlianceTitle>제휴서비스</AlianceTitle>
        <TopWrapper>
        {data.afl.map((item) => (
          <Button key={item.name} content={item.content} name={item.name} />
        ))}
        </TopWrapper>

        <BottomWrapper>
          <AfflImage />
          <Carousel />
        </BottomWrapper>
      </ThemeProvider>
    </Wrapper>
  );
}
