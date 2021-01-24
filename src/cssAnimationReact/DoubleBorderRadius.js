import React from 'react';
import styled, { keyframes } from 'styled-components';

const DoubleBorderRadious = () => {
  return (
    <BorderRadiousDiv>
      <SquareDiv>
        <span className="first_circle"></span>
         <span className="two_circle"></span>
        <span className="three_circle"></span>
        <div className="content">
          <h2>Heading Text</h2>
          <p>
          천지는 그것은 어디 발휘하기 하는 들어 못할 이것이다. 
          스며들어 실로 생생하며, 과실이 길지 거선의 것이다. 
          천지는 쓸쓸한 찾아다녀도, 투명하되 온갖 고행을 용기가 뭇 보라. 
          천고에 그들의 커다란 있다. 얼음과 불어 이상
          </p>
          <a className="square_a" href="#none">
            Read More
          </a>
        </div>
      </SquareDiv>
    </BorderRadiousDiv>
  )
}

const circle = keyframes `
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;


const BorderRadiousDiv = styled.div`
  margin: 0;
  background-color:#333;
  display:flex;
    justify-content:center;//수평중앙
    align-items: center;//수직중앙
    height:100vh;
`;

const SquareDiv = styled.div`
    width:400px;
    height:400px;
    position: relative;
    
    
    :hover span{
      background-color: crimson;
      border:none;
    }

    :hover .first_circle {
      opacity: 0.3;
    }
    :hover .two_circle {
      opacity:0.5;
    }
    :hover .three_circle {
      opacity:0.8;
    }
    
    span {
      position: absolute;
      width:inherit;
      height:inherit;
      border: 1px solid white;
      border-radius:40% 60% 65% 35%/ 40% 45% 50% 50%;
      transition:0.5s; //마우스 올렷ㅇㄹ때 색깔바꾸기위한 transition

    }
   
      .first_circle {
        animation: ${circle} 5s linear infinite;
      }

      .two_circle {
        animation: ${circle} 4s linear infinite;
        animation-direction:reverse;
      }
      .three_circle {
        animation: ${circle} 10s linear infinite;
      }
    
      .content {
       // border: 1px solid red;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        width:70%; //인라인블럭이됨.
        text-align:center;
        color:#fff;

        .square_a{
          color:#fff;
          
          border:1px solid white;
          border-radius:60% 70% 75% 55%/ 50% 55% 60% 70%;
          padding:5px;
          text-decoration: none;
        }
      }
`;


export default DoubleBorderRadious;