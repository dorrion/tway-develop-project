import React, {useState} from 'react';
import styled from 'styled-components';

// import locationIcon from '../../assets/icon/ico_btn_pin.png';

const BookZone = styled.div`
  width: 1200px;
  height: 213px;
  background-color: white;
  border-radius: 18px;
  margin: auto;
  margin-top: 3.5rem;
`;
const BookZoneHeader = styled.div`
  height: 32px;
  background-color: brown;
  border-radius: 18px 18px 0 0;
`;
const BookZoneBody = styled.div`
  background-color: white;
  max-height: 183px;
  border-radius: 0 0 18px 18px;
  padding: 30px 40px;
`;
const BookOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1140px;
  height: 36px;
`;

//왕복 편도 다구간 체크

const TabMenu = styled.ul`
  width: 206px;
  height: 32px;
  background-color: #f2f6f9;
  color: #4d4d4d;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-radius: 25px;
  margin-right: 52px;
  padding-left: 0;

  letter-spacing: -0.5px;
  text-align: center;
  cursor: pointer;

  .submenu {
    ${'' /* 기본 Tabmenu 에 대한 CSS를 구현합니다. */}
    width : calc( 206px / 3 );
    height: 100%;
    transition-duration: 0.15s;
    border-radius: 25px;
  }

  .focused {
    ${'' /* 선택된 Tabmenu 에만 적용되는 CSS를 구현합니다.  */}
    color:white;
    background-color: #d22c26;
    transition-duration: 0.15s;
    height: 100%;
  }

  & div.desc {
    text-align: center;
  }

  .text__content {
    transition-duration: 0.15s;
  }
`;

const RoundOrOne = () => {
  const [currentOption, setCurrentOption] = useState(0);

  const roundChecker = (index) => {
    setCurrentOption(index);
  };

  const menuArr = [
    {name: '왕복', content: 'Tab menu ONE'},
    {name: '편도', content: 'Tab menu TWO'},
    {name: '다구간', content: 'Tab menu THREE'},
  ];

  return (
    <TabMenu>
      {menuArr.map((el, index) => (
        <div
          key={index}
          className={index === currentOption ? 'submenu focused' : 'submenu'}
          onClick={() => roundChecker(index)}
        >
          {el.name}
        </div>
      ))}
    </TabMenu>
  );
};

//단체 유무 클릭
const CheckPoint = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 240px;
  > img {
    width: 22px;
    height: 22px;
    margin-right: 10px;
  }
  .checked {
    overflow: visible;
    font-weight: bold;
  }
`;

const GroupCheck = () => {
  const [isCheck, setIsCheck] = useState(false);

  const groupChecker = () => {
    setIsCheck(!isCheck);
  };

  return (
    <CheckPoint onClick={groupChecker} className={isCheck ? 'checked pointer' : 'pointer'}>
      <img
        src={
          isCheck
            ? process.env.PUBLIC_URL + 'icon/ico_checkbox_group.png'
            : process.env.PUBLIC_URL + 'icon/ico_checkbox_ none.png'
        }
      ></img>
      <div className={isCheck ? 'checked' : ''}>단체(10명이상)</div>
    </CheckPoint>
  );
};

//할인 코드 입력

const SaleCodeBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  height: 36px;
  background-color: #f2f6f9;
  justify-content: space-evenly;
  border-radius: 25px;
  align-items: center;

  > input {
    border: 0px;
    background-color: transparent;
  }
`;

const IntroBox = styled.div`
  .arrow_box {
    display: none;
    position: absolute;
    width: 450px;
    padding: 8px;
    left: 0;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    border-color: #4d4d4d;
    background: gray;
    color: #4d4d4d;
    font-size: 14px;
  }

  .arrow_box:after {
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -10px;
    border: solid transparent;
    border-color: rgba(51, 51, 51, 0);
    border-bottom-color: gray;
    border-width: 10px;
    pointer-events: none;
    content: ' ';
  }

  img:hover + div.arrow_box {
    display: block;
  }
`;

const DisCountInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const regex = /^[a-zA-Z0-9]{0,20}$/;
    if (regex.test(e.target.value)) {
      setInputValue(e.target.value.toUpperCase());
    }
  };
  return (
    <SaleCodeBox>
      <input type="text" onChange={handleChange} value={inputValue} placeholder="할인코드 입력"></input>
      <IntroBox>
        <img src={process.env.PUBLIC_URL + 'icon/ico_tooltip_gray.png'}></img>
        <div className="arrow_box">말풍선 테스트</div>
      </IntroBox>
    </SaleCodeBox>
  );
};

const BookSchedule = styled.div``;
const Pointers = styled.div`
  display: flex;
  flex-direction: row;
`;

const PointSelector = styled.div`
  max-width: 240px;
  max-height: 60px;
  margin-top: 25px;
  margin-right: 10px;
  background-color: #f2f6f9;

  > input {
    border: 0px;
    background-color: transparent;
    padding-left: 20px;
    width: 220px;
    height: 60px;
    background-image: url('../../assets/icon/ico_btn_pin.png');
    background-repeat: no-repeat;
    /* background-size: 22px; */
  }

  /* >img{
    z-index: 2;
  } */
`;

const Inquiry = styled.div`
  width: 100px;
  height: 60px;
  padding: 0;
  margin-top: 25px;
  margin-left: 10px;
  border-radius: 3px;
  color: #fff;
  background-color: #7d756d;
  border: 1px solid #7d756d;
  /* margin: ; */

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    font-size: 20px;
  }
`;

//출발지 고르기
const StartPoint = () => {
  return (
    <Pointers>
      <PointSelector>
        <input type="text" placeholder="출발지"></input>
        {/* <img src={process.env.PUBLIC_URL + 'icon/ico_btn_pin.png'}></img> */}
      </PointSelector>
      <PointSelector>
        <input type="text" placeholder="도착지"></input>
        {/* <img src={process.env.PUBLIC_URL + 'icon/ico_btn_pin.png'}></img> */}
      </PointSelector>
      <PointSelector>
        <input type="text" placeholder="YYYY-MM-DD"></input>
        {/* <img src={process.env.PUBLIC_URL + 'icon/ico_btn_pin.png'}></img> */}
      </PointSelector>
      <PointSelector>
        <input type="text" placeholder="성인1 소아1 유아1"></input>
        {/* <img src={process.env.PUBLIC_URL + 'icon/ico_btn_pin.png'}></img> */}
      </PointSelector>
      <Inquiry>
        <div>조회</div>
      </Inquiry>
    </Pointers>
  );
};

function FlightBookZone() {
  return (
    <BookZone>
      <BookZoneHeader>
        <img src={process.env.PUBLIC_URL + 'images/bg_main_booking02.png'}></img>
      </BookZoneHeader>
      <BookZoneBody>
        <BookOption>
          <RoundOrOne></RoundOrOne>
          <GroupCheck></GroupCheck>
          <DisCountInput></DisCountInput>
        </BookOption>
        <BookSchedule>
          <StartPoint></StartPoint>
        </BookSchedule>
      </BookZoneBody>
    </BookZone>
  );
}

export default FlightBookZone;
