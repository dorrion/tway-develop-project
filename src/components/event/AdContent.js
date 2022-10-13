/* eslint-disable */
import styled from 'styled-components';

export const Content = styled.div`
  width: 520px;
  height: 300px;

  /* margin-right : 7px; */
  padding-left: 2.3px;
  padding-right: 2.5px;
  /* border : 3px solid blue; */


  > img {
    height: 300px;
    /* margin-right : 10px; */

    /* border : 1px soild blue; */
  }
`;

export const AdContent = ({content}) => {
  // console.log(content[0])

  return content.map((data) => {
    // console.log(data);

    return (
      <Content key={data.id}>
        <img src={data.src}></img>
      </Content>
    );
  });

  // return(
  //     <div>
  //         <img src={content[0].src}></img>
  //     </div>
  // )
};
