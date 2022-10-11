/* eslint-disable */
//브랜치생성
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import HeaderToggle from './HeaderToggle';
import menuList from '../../../data/menuList.json';
import {NavSide} from './NavSide'
// import MenuModal from './MenuModal'

// import {ReactComponent as TopLogin} from '../../../data/ico_top_login.svg'
// import {ReactComponent as TopLogin} from '/icon/ico_top_login.svg'

// import ico_top_login from "/img/"

const HeaderBox = styled.div`
  
  .fixedBox {
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 101;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* background-color: aqua; */
    background-color: rgba(0, 0, 0, 0);
    color: white;
    transition: 0.2s;
    top: 0;
    border-top: 4px solid rgba(0, 0, 0, 0);
    border-bottom: 0.5px solid gray;


    
  }

  /* .fixedBox:hover {
    background-color: white;
    transition: 0.2s;
    border-bottom: 0.5px solid gray;
    border-top: 3px solid red;
    color: black;
  } */
  .fixedBoxHover {
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 101;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: aqua;
    /* background-color: rgba(0, 0, 0, 0); */
    color: black;
    transition: 0.2s;
    top: 0;
    border-top: 4px solid rgba(0, 0, 0, 0);;

    background-color: white;
    border-bottom: 0.5px solid gray;
    border-top: 3px solid red;
  }


  .fixed {
    background-color: white;
    transition: 0.5s;
    top: 0;
    box-shadow: 1px -10px 8px 10px black;
    border-top: 3px solid red;
    color: black;

  }

  .menu-tap {
    display: flex;
    width: 70%;
    height: 100%;
    justify-content: space-around;
    /* color: white; */
  }
  @media (max-width: 800px) {
    .menu-tap>li {
      display: none;
    }

  }


  .submenu {
    flex-flow: column;
    font-size: 20px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s;
    /* color: black; */
    border-bottom: 3px solid rgba(0, 0, 0, 0);
  }
  .submenuHover {
    /* color: white; */
    border-bottom: 3px solid rgba(0, 0, 0, 0);

  }
  .focused {
    border-bottom: 3px solid red;
    transition: 0.5s;
  }

  .logo {
    width: 101px;
    height: 43px;
    transition: 0.2s;
    background: url(//contents-image.twayair.com/homepage/images/common/top_logo.png) 0px 0px no-repeat;
  }
  .logo-scroll {
    width: 101px;
    height: 43px;
    transition: 0.2s;
    background: url(//contents-image.twayair.com/homepage/images/main/top_logo.png) 0px 0px no-repeat;
  }
`



export function HeaderNav() {
  //scroll color change
  const [ScrollY, setScrollY] = useState(0); 
  const [ScrollActive, setScrollActive] = useState(false); 

  function handleScroll() { 
    if(ScrollY > 299) {
        setScrollY(window.pageYOffset);
        setScrollActive(true);
    } else {
        setScrollY(window.pageYOffset);
        setScrollActive(false);
    }
}

useEffect(() => {
  function scrollListener() {  window.addEventListener("scroll", handleScroll); }
  scrollListener(); 
  return () => { window.removeEventListener("scroll", handleScroll); };
});

//tap state
const [currentTab, setCurrentTab] = useState(-1);

const selectMenuHandler = (index) => {
  setCurrentTab(index);
};

const [isOn, setisOn] = useState(false);
const [isBtnOn, setisBtnOn] = useState(false);
const [currentMenuList, setCurrentMenuList] = useState([]);

// function handleMainTap() {
//   if(true) {
//     setisOn(true)
//   } else {
//     setisOn(false)
//   }
// }




  return (
    <>
    <HeaderBox
    // {`fixedBox ${isOn ? 'fixedBoxHover' : null}`}
    onMouseLeave={() => {
      setCurrentMenuList([]);
    }}
    >
      <div className={`${ScrollActive ? "fixedBox fixed" : "fixedBox"}`}
          onMouseEnter={() => setisOn(true)}
          onMouseLeave={() => setisBtnOn(false)}
          // onMouseLeave={() => {
          //   setCurrentMenuList([]);
          // }}
          >
        <a href='/'>
          <div className={ScrollActive ? "logo " : "logo-scroll"}></div>
        </a>
        <div className='menu-tap'>
          {menuList.map((el, index) => {
            return (
              <li 
                key={index}
                className={`submenu ${isOn ? null : 'submenuHover'} ${
                  index === currentTab ? 'submenu focused' : 'submenu'
                  }`}
                onMouseOver={() => {
                  selectMenuHandler(index);
                  setCurrentMenuList(el.list1);
                  setisBtnOn(true);
                }}
                onMouseOut={() => {
                  setCurrentTab(9);
                }}
                >
                {el.tapName}
              </li>
            )
          })}
        <NavSide/>
        </div>
      </div>

        <HeaderToggle
          currentMenuList={currentMenuList}
          isBtnOn={isBtnOn}
          // setisBtnOn={setisBtnOn}
          // setCurrentMenuList={setCurrentMenuList}
          // setisOn={setisOn}
        />
    {/* {isBtnOn ? (
        <HeaderToggle
          currentMenuList={currentMenuList}
          isBtnOn={isBtnOn}
          setisBtnOn={setisBtnOn}
          setCurrentMenuList={setCurrentMenuList}
          setisOn={setisOn}
        />
      ) : null} */}
    </HeaderBox>
    </>
  )
}

