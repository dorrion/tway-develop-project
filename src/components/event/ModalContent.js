
import styled from 'styled-components';
import {React} from 'react';

export const Container = styled.div`
    width :100%;
    height : 1000px;
    background-color : #f3f3f3;

    display : flex;
    flex-direction : column;
    align-items : center;
    
    .title {
        width : 100%;
        text-align : center;
        margin-top : 40px;
        font-size : 30px;
        font-weight :700;
        color : #555555;
    }
`



const ModalContent = () => {

    let newDate = new Date();
    let month = newDate.getMonth() + 1;

    return (
        <>
        <Container>
            <div className='title'>{month}월의 이벤트를 확인하세요!</div>
        </Container>
        </>
    )
}

export default ModalContent;