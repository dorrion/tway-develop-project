import React from 'react';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';

import Button from './Button';
import AfflImage from './AfflImage';
import Carousel from './Carousel';
import theme from 'data/theme';

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
  width: calc(100%-50px);
  height: 210px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 32px;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  height: 368px;
`;

export default function AfflIcon() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <AlianceTitle>제휴서비스</AlianceTitle>
        <TopWrapper>
          <Button />
        </TopWrapper>

        <BottomWrapper>
          <AfflImage />
          <Carousel />
        </BottomWrapper>
      </ThemeProvider>
    </Wrapper>
  );
}
