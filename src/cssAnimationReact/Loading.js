import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <>

    <LoadingDiv>
        <span ></span>
        <span className="two_loading"></span>
        <span className="three_loading"></span>
    </LoadingDiv>
    </>
  )
}

const loading = keyframes`
  0%{
    opacity:0;
    transform:scale(0.5);
  }
  50% {
    opacity:1;
    transform:scale(1.2)
  }
  100% {
    opacity:0;
    transform:scale(0.5);
  }
`;



const LoadingDiv = styled.div`
    border: 1px solid black;
    margin: 0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100vh;

      
      span {
        //span = inline 요소 이기때문에 width값을 줄 수 없음.
        display: inline-block; //width값을 주기위해 inline-block으로줌
        width:20px;
        height:20px;
        background-color: gray;
        margin-left:5px;
        border-radius:50%;
        background-color: green;
        animation: ${loading} 1s linear infinite;
        
      
        
      
      }
      .two_loading {
        animation-delay: 0.2s;
        background-color:crimson;
      }
      .three_loading {
        animation-delay: 0.4s;
        background-color:dodgerblue;
      }
`;



export default Loading;