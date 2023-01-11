/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import data from 'data/afl_list.json';

const IconWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  grid-template-columns: repeat(6, 1fr);
  color: #313131;
  text-decoration: none;
  cursor: pointer;

  margin-left: 100px;
 
 &:first-child {
  margin-left: 0;
 }
`;

const StyledCircle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 110px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.white};

  cursor: pointer;

  
  
  :hover {
    background: ${(props) => props.theme.red};
  }
`;

// Icon CSS
const Icon = styled.img`
  width: 72px;
  height: 72px;

`;

function Button({content, name}) {
  return (
    <>
        <IconWrapper>
          <StyledCircle>
            <Icon src={content} />
          </StyledCircle>
          <p>{name}</p>
        </IconWrapper>
    
    </>
  );
}

export default Button;
