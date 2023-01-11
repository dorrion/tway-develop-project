/* eslint-disable */
import React, { useState, useRef } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import PropTypes from 'prop-types';
import albumArrow from 'assets/icon/arr_location.png'
import prevBtn from 'assets/icon/btn_goods_prev.png'
import nextBtn from 'assets/icon/btn_goods_next.png'
import pauseBtn from 'assets/icon/bg_pause2.png'
import playBtn from 'assets/icon/bg_play2.png'

const AlbumContainer = styled.ul`
  height : 450px;
  margin: 0;
  padding-top: 15px;

  .slick-slide{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .slick-track{
    margin-bottom: 30px;
  }

  .slick-list {
    width: 1200px;
    margin: 0 auto;
  }

  .slick-dots li{
    margin: 0;
  }

  .slick-arrow {
    width: 40px;
    height: 40px;
  }

.slick-prev{
  left: 50px;
}

.slick-next{
  right: 50px;

}

.togglePlay {
  box-sizing: content-box;
  position: absolute;
  padding-top: 4.8px;
  right: 38%;
}

`;

const FlightAlbum = styled.li`
  width :  282px;
  background-color: ${props => props.theme.white};
  /* height: 380px; */
  .destinationImg{
    margin: 0;
  }
`

const AlbumAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px;
  /* height: 120px; */
  font-size: 19px;
  font-weight: 700;

  .priceType{
    background-color: #cccccc;
    border-radius: 50px;
    padding: 5px 10px;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 20px;
  }
`

const AlbumTrip = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin-bottom: 30px;
`
const AlbumPriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`
export const AlbumSlider = ({flights}) => {
  const [isPlayed, setisPlayed] = useState(true);
  const carouselRef = useRef();

  const flightAlbum = flights.map(list => (
      <FlightAlbum key={list.id}>
        <img className='destinationImg' src={list.pic}/>
    
        <AlbumAbout>
          <span className='priceType'>편도총액</span>
    
          <AlbumTrip style={{ height: '100%'}}>
            <span>{list.departure}</span>
            <span> 
              <img src={albumArrow} />
            </span> 
            <span>{list.destination}</span>
          </AlbumTrip>
    
          <AlbumPriceContainer>
            <span style={{fontSize: "5px"}}>KRW</span>
            <span>{list.price} ~ </span>
          </AlbumPriceContainer>
    
        </AlbumAbout>
    
      </FlightAlbum>
      ));    

  const onPauseClick = () => {
    if (isPlayed) {
      carouselRef.current.slickPause();
    } else {
      carouselRef.current.slickPlay();
    }

    setisPlayed(!isPlayed);
  };

  return (
    <>
    <AlbumContainer>
      <Slick ref={carouselRef} {...settings}>
          {flightAlbum}
      </Slick>
      <div className='togglePlay'>
        {isPlayed ? <img src={pauseBtn} onClick={() => onPauseClick()}/> : <img src={playBtn} onClick={() => onPauseClick()} />}
      </div>
    </AlbumContainer>
    </>
  )
}

const settings = {
  dots : true, // 캐러셀 점을 보여줄 것인지
  infinite: true, // 무한히 반복할 것인지
  speed: 500, // 화살표 클릭 시의 캐러셀 이동 속도
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4, // 한 번에 몇개의 화면을 보여줄 것인지
  slidesToScroll: 1,
  prevArrow: <img src={prevBtn} alt='previous button'/>,
  nextArrow: <img src={nextBtn} alt='next button'/>
}

// SimpleSlider.propsTypes = {
//   flights: PropTypes.object
// }
