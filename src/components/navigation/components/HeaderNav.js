/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import HeaderToggle from './HeaderToggle';
import ToggleMenu from './ToggleMenu';
import menuList from '../../../data/menuList.json';

// import {ReactComponent as TopLogin} from '../../../data/ico_top_login.svg'
// import {ReactComponent as TopLogin} from '/icon/ico_top_login.svg'

// import ico_top_login from "/img/"

const HeaderInner = styled.div`
  /* display: flex;
    width: 100%;
    background-color: rgba(0,0,0,0);
    align-items: center;
    flex-direction: column; */

  > .container {
    /* width: 1200px; */
    display: flex;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    align-items: center;
    flex-direction: column;
    height: 85px;
    margin: 0;
    transition: 0.5s;
    color: white;
  }

  .containerHover {
    background-color: white;
    transition: 0.5s;
    color: black;
  }
`;

const TabMenu = styled.ul`
  width: 1200px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  .submenu {
    font-size: 20px;
    display: flex;
    justify-content: center;
    flex-grow: 1;
    padding-left: 20px;
    cursor: pointer;
    transition: 0.5s;
    color: black;
  }
  .submenuHover {
    color: white;
  }

  .focused {
    /* background-color: red; */
    display: flex;
    justify-content: center;
    flex-grow: 1;
    transition: 0.5s;
  }
`;

const Side = styled.div`
  width: 140px;
  height: 74px;
  list-style: none;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  .sel_lang_wrap {
    display: flex;
    justify-content: space-around;
  }
  .util_menu {
    display: flex;
    justify-content: space-around;
    color: white;
  }
  .set_util_menu {
    display: flex;
    justify-content: space-around;
    color: black;
  }

  .langBtn {
    border: 0;
    outline: 0;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    color: black;
    transition: 0.5s;
  }
  .langBtnHover {
    color: white;
  }
  .imgColor {
    fill: rgb(42, 169, 224);
  }
  .imgColorHover {
    fill: rgb(42, 169, 224);
  }
`;

export function HeaderNav() {
  const [currentTab, setCurrentTab] = useState(0);

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  const [isOn, setisOn] = useState(false);
  const [isBtnOn, setisBtnOn] = useState(false);

  const languageArr = [
    {name: '한국', lang: '한국어'},
    {name: 'Laos', lang: 'English'},
    {name: '日本', lang: '日本語'},
  ];

  const [currentMenuList, setCurrentMenuList] = useState([]);

  return (
    <HeaderInner
      onMouseEnter={() => setisOn(true)}
      onMouseLeave={() => {
        setCurrentMenuList([]);
      }}
    >
      <div className={`container ${isOn ? 'containerHover' : null}`}>
        <TabMenu>
          <li>
            <a href="/">
              <img src="/logo/top_logo.png"></img>{' '}
            </a>
          </li>

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
            );
          })}

          <Side>
            <div className="sel_lang_wrap">
              {languageArr.map((el, index) => {
                if (el.name === '한국') {
                  return (
                    <li key={index}>
                      <button className={`langBtn ${isOn ? null : ' langBtnHover'}`}>
                        {el.name} | {el.lang}
                      </button>
                    </li>
                  );
                }
              })}
            </div>
            <div className="util_menu">
              <a href="/" className="btn_login">
                <img className={`imgColor ${isOn ? null : ' imgColorHover'}`} src="/icon/ico_top_login.png"></img>{' '}
              </a>
              <a href="/" className="btn_search">
                <img className={`imgColor ${isOn ? null : ' imgColorHover'}`} src="/icon/ico_top_search.png"></img>{' '}
              </a>
              <a href="/" className="btn_allmenu">
                <img className={`imgColor ${isOn ? null : ' imgColorHover'}`} src="/icon/ico_top_allmenu.png"></img>{' '}
              </a>
              {/* <a href='/' className='btn_search'><img src="/icon/ico_top_search.png"></img></a>  */}
              {/* <a href='/' className='btn_allmenu'><TopLogin ></TopLogin></a> */}
              {/* <a href='/' className='btn_allmenu'><img src={ico_top_login}/></a> */}
            </div>
          </Side>
        </TabMenu>
      </div>
      {isBtnOn ? (
        <HeaderToggle
          currentMenuList={currentMenuList}
          isBtnOn={isBtnOn}
          setisBtnOn={setisBtnOn}
          setCurrentMenuList={setCurrentMenuList}
          setisOn={setisOn}
        />
      ) : null}
    </HeaderInner>
  );
}
