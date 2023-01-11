/* eslint-disable */
import styled, {ThemeProvider} from 'styled-components';
import arrow from 'assets/icon/ico_route_goods.png';
import albumArrow from 'assets/icon/arr_location.png';
import listIcon from 'assets/icon/ico_sort_list.png';
import albumIcon from 'assets/icon/ico_sort_album_on.png';
import prevBtn from 'assets/icon/btn_goods_prev.png';
import nextBtn from 'assets/icon/btn_goods_next.png';

import { FlightList } from './ListCarousel';
import { AlbumSlider } from './Carousel';
import { useState } from 'react';
// import Bold from '../../assets/fonts/NanumGothicBold.woff'

const CarouselContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${(props) => props.theme.lightgray};
  padding: 20px 0;
`;

const CarouselHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  display: inline-block;
  border: 1px solid #d1d1d1;
  width: 40px;
  height: 40px;
  text-align: center;
  vertical-align: middle;

  .carousel-type {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  &.selected{
    border: 1.1px solid #000;
  }
`;

const ContentContainer = styled.div`
  width: 100vw;
  /* width: 1220px; */
  height: 480px;
  margin: 10px;
  padding: 15px 0;
`;

export const Tour = ({flights}) => {
  const [isList, setIsList] = useState(true);

  return (
    <>
      <CarouselContainer style={{position: 'relative'}}>
        <CarouselHeader>
          <h2>최저가 여행</h2>
          <div style={{position: 'absolute', right: '11%'}}>
            <IconContainer className={isList? 'selected' : null } onClick={() => setIsList(true)}>
              <img src={listIcon} className='carousel-type' />
            </IconContainer>
            <IconContainer className={isList? null: 'selected' } onClick={() => setIsList(false)}>
              <img src={albumIcon} className='carousel-type' />
            </IconContainer>
          </div>
        </CarouselHeader>

        <ContentContainer>
            { isList ? <FlightList flights={flights}/> : <AlbumSlider flights={flights}/> }
        </ContentContainer>
      </CarouselContainer>

    </>
  );
};
