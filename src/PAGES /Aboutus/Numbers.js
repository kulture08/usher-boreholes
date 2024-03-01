import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
.drilled {
    text-align: center;
    .namba-1 {
      font-weight:800;
      font-size: 70px;
    }
    .namba-2 {
      font-weight:800;
      font-size: 22px;
      margin-top: 10px;
    }
    .namba-3 {
      font-weight:800;
      font-size: 70px;
    }
    .namba-4 {
      font-weight:800;
      font-size: 22px;
      margin-top: 10px;
    }
    .namba-5 {
      font-weight:800;
      font-size: 70px;
    }
    .namba-6 {
      font-size: 22px;
      margin-top: 10px;
    }
    .namba-7 {
      font-size: 70px;
    }
    .namba-8 {
      font-size: 22px;
      margin-top: 10px;
      margin-bottom: 15px;
    }
    @media (min-width: 768px) {
      /* padding: 5% 7%; */
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      flex-wrap: wrap;
      text-align: center;
      margin-top: 80px;
    }
    @media (min-width: 992px) {
      margin-top: 80px;
    
    }
    @media (min-width: 1200px) {
      margin: 155px 0 0px 0;
    
    }

    .d-1 {
      color: rgb(18, 26, 52);
      font-family: helvetica-black;
      width: 200px;
      margin: 0px auto 30px;
      text-align: center;
    }
  }

`;
function Numbers() {
  return (
    <Wrapper>
      <div className="drilled">
        <div className="d-1">
          <p className="namba-1">100+</p>
          <p className="namba-2">BOREHOLES DRILLED</p>
        </div>
        <div className="d-1">
          <p className="namba-3">300+</p>
          <p className="namba-4">CLIENTS SATISFIED</p>
        </div>
        <div className="d-1">
          <p className="namba-5">150+</p>
          <p className="namba-6">SERVICED RENDERED</p>
        </div>
        <div className="d-1">
          <p className="namba-1">100+</p>
          <p className="namba-8">BOREHOLES DRILLED</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Numbers;
