/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import menuList from '../../../data/menuList.json';

const ToggleBox = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: white;
  box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 20%);

  > ul {
    width: 1200px;

    display: grid;
    grid: auto-flow / 1fr 1fr 1fr;
    list-style: none;
    justify-content: center;
    /* box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 20%); */
    top: 85px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 0%;
  }
  .menuList {
    padding-right: 40px;
    color: black;
    border-right: 1px solid #e0e0e0;
    transition: 0.5s;
  }
  .listName {
    list-style: none;
    font-size: 17px;
    /* color: rgb(26, 26, 26); */
    color: black;
    font-weight: 800;
  }
  .list2Ul {
    list-style: none;
    margin: 0;
  }
  .list2Li {
    list-style: none;
    font-size: 14px;
    color: gray;
    margin-top: 10px;
    padding: 0px;
  }
`;

function HeaderToggle({currentMenuList, isBtnOn, setisBtnOn, setisOn}) {
  return (
    <ToggleBox
      onMouseLeave={() => {
        setisOn(false);
        setisBtnOn(false);
      }}
    >
      <ul>
        {currentMenuList.map((data) => (
          <li className="menuListHover">
            <span className="listName">{data.name}</span>
            <ul className="list2Li">
              {data.list2?.map((lists) => (
                <li>{lists.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </ToggleBox>
  );
}

export default HeaderToggle;
