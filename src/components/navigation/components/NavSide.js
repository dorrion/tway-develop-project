import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {ReactComponent as NavUser} from '../../../assets/icon/NavUser.svg';
import {ReactComponent as Hamburger} from '../../../assets/icon/Hamburger.svg';
import {ReactComponent as NavMagnifier} from '../../../assets/icon/NavMagnifier.svg';
// import useHover from './useHover'

export default {
  title: 'Hook/useHover',
};

// import MenuModal from './MenuModal'

const Side = styled.div`
  width: 140px;
  height: 100%;
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
    cursor: pointer;
    color: white;
    border: 0;
    outline: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: 0.5s;
  }
  .imgColor {
    fill: rgb(42, 169, 224);
  }
  .imgColorHover {
    fill: rgb(42, 169, 224);
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export function NavSide() {
  //scroll color change
  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);

  function handleScroll() {
    if (ScrollY > 299) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // const languageArr = [
  //   {name: '한국', lang: '한국어'},
  //   {name: 'Laos', lang: 'English'},
  //   {name: '日本', lang: '日本語'},
  // ];

  // 모달창 노출 여부 state
  // const [modalOpen, setModalOpen] = useState(false);

  // // 모달창 노출
  // const showModal = () => {
  //     setModalOpen(true);
  // };

  // const [ref, hover] = useHover();

  return (
    <Side
    // ref={ref}
    >
      <div className="sel_lang_wrap">
        {/* <div onClick={showModal}>모달 띄우기</div>
            {modalOpen && <MenuModal setModalOpen={setModalOpen} />} */}
        {/* {hover  ? <div className="langBtn "></div> : <div className="langBtnHover"></div>} */}
      </div>

      {/* <div 
      className="sel_lang_wrap"
      >
        {languageArr.map((el, index) => {
          if (el.name === '한국') {
            return (
              <li key={index}>
                <button className={ScrollActive ? "langBtn" : "langBtnHover"}
                >
                  {el.name} | {el.lang}
                </button>
              </li>
            );
          }
        })}
      </div> */}
      <div className="util_menu">
        <a href="/" className="btn_login">
          <NavUser fill={ScrollActive ? 'black' : 'white'} />
        </a>
        <a href="/" className="btn_search">
          <NavMagnifier fill={ScrollActive ? 'black' : 'white'} />
        </a>
        <a href="/" className="btn_allmenu">
          <Hamburger fill={ScrollActive ? 'black' : 'white'} />
        </a>
      </div>
    </Side>
  );
}
