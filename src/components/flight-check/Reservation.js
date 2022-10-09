import React from 'react';
import styled from 'styled-components';
import FlightBookZone from './FlightBookZone';
import MoveCae from './MoveCae';

const BackGround = styled.div`
  position: relative;

  .el__zone {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .video__zone {
    position: relative;
  }
  .video {
    width: 100%;
    z-index: -1;
    /* background-color: aliceblue; */
  }
`;

function Reservation() {
  return (
    <BackGround>
      <div className="el__zone">
        <MoveCae></MoveCae>
        <FlightBookZone></FlightBookZone>
      </div>
      <div className="video__zone">
        <video src={process.env.PUBLIC_URL + 'images/main_video.mp4'} className="video"></video>
      </div>
    </BackGround>
  );
}

export default Reservation;
