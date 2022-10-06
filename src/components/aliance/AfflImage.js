/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import gogi from 'assets/images/386844ba-b61d-448e-947a-eb7db24562a1.png';

const LargeImage = styled.img`
  width: 380px;
  height: 318px;
  margin-right: 30px;
  cursor: pointer;
`;
function AfflImage(props) {
  return <LargeImage src={gogi} />;
}

export default AfflImage;
