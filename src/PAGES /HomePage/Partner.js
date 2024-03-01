import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  padding: 20px;
  .partner {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (min-width: 992px) {
     margin: 20px 4% 0 7% ;
    }
    .pix-text {
      @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
      }
    }
    .imagez {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    img {
      object-fit: contain;
      width: 40%;
      @media (min-width: 768px) {
        margin: 30px 5%;
      }
      @media (min-width: 992px) {
        width: 20%;
        margin: 10px 3%;
      }
    }
    .txt-btn {
        .btn {
          width: 210px;
          height: 40px;
          background: rgb(38, 172, 226);
          color: rgb(255, 255, 255);
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          border: none;
          border-radius: 40px;
          font-size: 15px;
          margin-top: 30px;
          font-weight: 800;
        }
      }
  }

  h1 {
    color: rgb(18, 26, 52);
    font-size: 32px;
    margin-bottom: 30px;
  }
  p {
    line-height: 25px;
  }
`;
function Partner() {
  return (
    <Wrapper>
      <div className="partner">
        <div className="txt-btn">
          <h1>Our Partners</h1>
          <p>
            The company on its day to day operations works in collaboration with
            business partners, some who are in Zimbabwe, Regionally and
            Internationally.
          </p>
          <button className="btn">Become a partner</button>
        </div>
        <div className="imagez">
          <img src="./images/p1.png" alt="" />
          <img src="./images/p2.jpeg" alt="" />

          <img src="./images/p3.jpeg" alt="" />
          <img src="./images/p4.png" alt="" />

          <img src="./images/p5 (1).png" alt="" />
          <img src="./images/p6.png" alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Partner;
