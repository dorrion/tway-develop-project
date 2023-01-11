// import dummyImg from '../../assets/images/1f4530f7-4e4c-494c-9a60-51663f2d0120.jpg';
import { dummyData } from 'data/Event_dummyData';
import { motion } from "framer-motion";

import styled from 'styled-components';
import {React, useState } from 'react';

export const Container = styled.div`
    width :100%;
    /* height : 1500px; */
    background : #ffffff49;

    display : flex;
    flex-direction : column;
    align-items : center;
    
    .title {
        width : 500px;
        padding : 10px;
        text-align : center;
        margin-top : 40px;
        font-size : 30px;
        font-weight :700;
        color : white;

        border : 1px solid red;
        border-radius : 30px;

        background-color : #ff2c2c;
    }

    .contentContainer {
        display : flex;
        flex-direction : column;

        width : 60%;

        
        transition : .3s ease;
        margin-top : 30px;
      
        .content {
            width : 100%;
            min-height : 100px;

            display : flex;
            flex-direction : column;

            align-items : center;
            justify-content : center;

            /* background-color : linear-gradient(36deg, rgba(255,255,255,1) 0%, rgba(252,105,69,1) 100%); */
            border-bottom : 1px solid #e0e0e0;
            /* border : 1px solid red; */

            /* &:hover {
                background : linear-gradient(36deg, rgba(255,255,255,1) 0%, rgba(252,105,69,1) 100%);
            } */

            .contentTitle {
                font-size : 25px;
                font-weight : 700;
                margin-top : 10px;
                margin-bottom : 10px;

                color : #adadad;

                transition : ease .2s;

                &:hover {
                    font-size : 30px;
                    font-weight : 700;
                    color : #ff2a2a;
                }

            }

            .activeTitle {
                font-size : 25px;
                font-weight : 700;
                margin-top : 10px;
                margin-bottom : 10px;

                color : #2e2e2e;

                
            }

            .contentDescription {
                display : flex;
                flex-direction : column;
                justify-content : center;
                align-items : center;
                width : 100%;

                

                

                > p {
                    > a {
                        text-decoration : none;

                    }
                }
            }
        }
    }
`
const imageAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{
    x:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
  }

}


const ModalContent = () => {

    let newDate = new Date();
    let month = newDate.getMonth() + 1;


    const [active, setActive] = useState(false);

    const handleClick = (id) => {
        // console.log(id)
        if (active === id){
            setActive(false);
        }else{
            setActive(id);
        }
        // console.log(active)
    }


    return (
        <>
        <Container>
            <motion.div className='title'
                variants={imageAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:false, amount:0.1}}
                transition={{staggerChildren:0.5}}
            >{month}월의 이벤트를 확인하세요!</motion.div>
            <div className='contentContainer'>

                {dummyData.map(el => {
                    return (
                        <div className='content' onClick={()=> handleClick(el.id)} key={el.id}>
                             <div className={el.id === active ? "activeTitle" : "contentTitle"} >{el.title}</div>
                            {active === el.id ?
                                <div className='contentDescription'>
                                    <img src={el.src}/>
                                    <p><a href={el.url}>🪄상세정보 바로가기</a></p>
                                </div> : null}
                        </div>
                    )
                })}

                {/* <div className='content' onClick={handleClick}>
                    <div className='contentTitle'>카카오페이 5만원 할인!</div>
                    {active ?
                        <div className='contentDescription'>
                            <img src={dummyImg}/>
                            <p>이것은 설명입니다.</p>
                        </div> : null}
                </div> */}
            </div>
        </Container>
        </>
    )
}

export default ModalContent;