import React from "react";
import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";
const Wrapper = styled.section`

  background:linear-gradient(rgba(18, 26, 52, 0.85), rgba(18, 26, 52, 0.85)) , url(./images/banner.jpeg);
  background-size: cover;
  background-position: center bottom;
  text-align: left;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  max-height: 100%;
  width: 100vw;
  justify-content: center;
  height: 100vh;
  position: relative;
  /* &:before{
    width: 100%;
    height: 100%;
    position: absolute;
    background:  ;
    content: "";
  } */
  @media (min-width: 768px){
      height: 50vh;
    }
  @media (min-width: 1200px){
      height: 100vh;
    }
  .h1 {
    width: 92%;
    font-size:32px;
 margin:5%;
    color: #fff;
    font-weight:900;
    @media (min-width: 768px){
      width: 79%;
    }
    @media (min-width: 992px){
      width: 58%;
      margin-top: 180px;

    }
    @media (min-width: 1200px){
      width: 68%;
    }
   
  }
  .btn{
    /* margin-top: -50px; */
    text-align:center;
    border: none;
  width: 210px;
    border-radius:49px;
    background: rgb(255, 255, 255);
    font-size: 18px;   
    margin:5%;
    padding:18px;
    background-color:#fff;
    font-weight:700;
    @media (min-width: 992px){
      margin-top:180px;
      margin: 0 60px;
    }
  }
`;
function Banner() {
  return (
    <div>
      <Wrapper>
        <div className="inner">
          <h1 className="h1">
            Prolific Boreholes is a dynamic, full service borehole drilling &
            water solutions company.
          </h1> *
          <button className="btn">
            <span>Request a quote</span>
            <span>
              <BsArrowRightShort />
            </span>
          </button>
        </div>
      </Wrapper>
    </div>
  );
}

export default Banner;
