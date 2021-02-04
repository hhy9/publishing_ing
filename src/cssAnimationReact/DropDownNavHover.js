import React from 'react';
import styled from 'styled-components'

const dropDownNavHover = () => {
  return (
    <>

      <NavDiv>
        <button className="navButton">Real Estate Type</button>
        <div className="dropdown-adiv">
          <a href="#none">All</a>
          <a href="#none">One room</a>
          <a href="#none">1.5 rooms</a>
          <a href="#none">Two Room</a>
          <a href="#none">Three</a>
          <a href="#none">Officetel</a>
        </div>
      </NavDiv>
    </>
  )
}

const NavDiv = styled.div`
   
  margin: 5px;
  //width:200px;
  display:inline-block; //컨텐츠 크기만큼 줄어듬 

  :hover .dropdown-adiv {
    display:block;
  }

  .navButton{
    width:200px;//부모에서 width값 지정해주면 width:inherit; 로 가져와야함
    padding:10px;
    background:#F9DB49;
    color:black;
    border:none;
    outline:none;
    cursor:pointer;
  }


  .dropdown-adiv {
    display:none;
    //border: 1px solid #000;
    width:200px;
     a {
      display:block;
      padding:5px;
      text-decoration:none;
      background:#F5BD42;
      color:black;
      text-align:center;
    }
    a:hover {
      background:#eee;
    }
  }
 

`;

export default dropDownNavHover;