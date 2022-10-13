/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import menuList from '../../../data/menuList.json';




const ToggleBox = styled.div`
  margin-top: 84px;
  z-index: 100;
  position: fixed;
  box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 20%);

  background-color: white;
  display: grid;
  grid: auto-flow / 1fr 1fr 1fr;
  list-style: none;
  justify-content: center;
  width: 100%;

  padding-left: 150px;
  padding-right: 150px;

  
  .showMenuListHover {
    /* display: none; */
    padding-top: 30px;
    padding-bottom: 30px;
    transition: 0.5s;
    >ul {
      padding: 0;
    }
  }
  .showMenuListHover:hover {
    transition: 0.5s;
  }
 
  .listName {
    margin-top: 30px;
    font-weight: 900;
    font-size: 20px;
  }
  
  .list2Li {
    list-style: none;
    font-size: 15px;
    color: gray;
  }
  .list2Li>li {
    padding-top: 4px;
  }
`

const DIV_Hover = styled.div`
  transition: top 1s ease-in; // trasition 으로 top 이동시 자연스럽게 만들어 주자
  top: 20px; 		       // 호버메시지의 원래 위치 

  &.hover { 			// 호버시 추가되는 클래스
    top: 0px; 			// 호버시 top 위치를 조금 위로 움직여준다.
    animation-duration: 3s;  	// 애니메이션 3초동안 실행 
    animation-name: fadeout; 	// 애니메이션 효과는 fade-out
  }
  
  @keyframes fadeout { 		// fade-out시 opacity를 흐릿하다가 선명하기 만들자
    0% {
      opacity: 0; 
    }

    100% {
      opacity: 1;
    }
  }
`


function HeaderToggle({currentMenuList, setisBtnOn, setisOn}) {

  return (

    

    <ToggleBox
    >
        {currentMenuList.map((data) => (
          <li className="showMenuListHover"
          >
            <span className="listName">{data.name}</span>
            <ul className="list2Li">
              {data.list2?.map((lists) => (
                <li>{lists.name}</li>
              ))}
            </ul>
          </li>
        ))}
    </ToggleBox>
  );
}

export default HeaderToggle;
