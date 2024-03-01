import React from "react";
import styled from "styled-components";
// import Heading from './styled/Heading';

function Services() {
  return (
    <Wrapper id="services">
      <h2 color="#fff">Our Services</h2>
      <p className="p1">
        Prolific Boreholes is a dynamic, full service borehole drilling & water
        solutions company.{" "}
      </p>
      <p className="p2">
        We’re totally dedicated to ensuring that the nation and region at large
        is provided with clean water.{" "}
      </p>
      <div className="services-inner">
        <img src="./images/service1.png" alt="" />
        <img src="./images/service2.png" alt="" />
        <img src="./images/service3.png" alt="" />
        <img src="./images/service4.png" alt="" />
    <img src="./images/service5.png" alt="" />
        <img src="./images/service6.png" alt="" />
        <img src="./images/service7.png" alt="" />
        <img src="./images/service8.png" alt="" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: rgb(18, 26, 52);
  /* background:${(props) => props.theme.color.darkblue}; */
  padding: 10% 5%;
  @media (min-width: 768px) {
    padding: 5% 7%;
  }
  @media (min-width: 1200px) {
    /* margin:10% 7%; */
  }
  h2{
    font-weight:900;
    font-size:32px;
    color:#fff;
    margin-bottom:20px;
  }

  .p1 {
    color: #fff;
    line-height: 25px;
  }
  .p2{
    margin-bottom:60px;
    color: #fff;
    line-height: 25px;
    @media (min-width: 1200px) {
  
  }
  }
  .services-inner {
    /* overflow-x: scroll;
    display: flex;
    margin-top: 70px; */

    @media (min-width: 768px) {
      display: flex;
    flex-wrap: wrap;
  
    }
  
    &::-webkit-scrollbar {
      /* background:${(props) => props.theme.color.darkblue}; */
      height: 2px;
    }
    &::-webkit-scrollbar-thumb {
      background: #fff;
    }

    img {
      width: 250px;
      margin: 0 auto;
      display: block;
  @media (min-width: 768px) {
         margin: 10px auto;
         width: 240px;
      }
  @media (min-width: 992px) {
   width: 333px;
      }
  @media (min-width: 1200px) {
    width: 217px;
    margin: 0px 30px 60px;
      }
    }
  }
`;

export default Services;
