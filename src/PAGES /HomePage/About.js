import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  padding: 5%;

  .about-inner {
    @media (min-width: 768px) {
      .inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (min-width: 992px) {
          margin-top: 200px;
        }
        @media (min-width: 1200px) {
    
    margin-top: 140px;
}


        
      }
      .p{
        width: 93%;
        @media (min-width: 768px) {

    width: 76%;

        }
      }
    }

    .branches {
      display: none;
      position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 86%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    border-radius: 17px;
    box-shadow: rgba(0, 0, 0, 0.11) 0px 3px 6px;

      @media (min-width: 992px) {
        bottom: 550px;
        display: flex;
        justify-content: space-between;
      }
      @media (min-width: 1200px) {
        bottom: -120px;
    top: unset;
}
      }
      .branche-1 {
            padding: 55px 3%; 
      width: 25%; 
        border-radius: 17px 0px 0px 17px;
        box-shadow: rgba(0, 0, 0, 0.11) 2px 0px 3px 0px inset;
        background-color: #4aade2;
       
        /* width: 25%; */
        .call {
          font-size: 13px;
        }
        .email {
          font-size: 10px;
        }
        .p-t {
          font-size: 12px;
        }
      }
      .branche-2 {
        background-color:#fff;
        padding: 55px 3%; 
      width: 25%; 
  
        border-radius: 17px 0px 0px 17px;
        box-shadow: rgba(0, 0, 0, 0.11) 2px 0px 3px 0px inset;
        .call {
          font-size: 13px;
        }
        .email {
          font-size: 1px;
        }
        .p-t {
          font-size: 12px;
        }
      }
    }
  
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

  .left {
    p {
      /* width: 93%; */
      line-height: 1.5;
      font-size: 18px;
    }
    h2 {
      color: rgb(18, 26, 52);
      font-size: 32px;
      margin-top: 20px;
      margin-bottom: 20px;

  
    }

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
  .ryt {
    img {
      display: block;
      margin: auto;
      margin-top: 30px;
    }
  }
`;
function About() {
  return (
    <Wrapper>
      <div className="about-inner">
        <div className="branches">
          <div className="branche-1">
            <h6>Main Branch</h6>
            <div className="p-t">
              <p>165 Harare Drive,</p>
              <p>Marlborough, Harare</p>
            </div>
            <div className="call">
              <p>+263 773 259 059</p>.<p>+263 719 470 844</p>
              <p>+263 780 046 621</p>
              <p> +263 242 309 789</p>
            </div>
            <p className="email">prolificboreholes@yahoo.com</p>
          </div>
          <div className="branche-2">
            <h6>Second Branch</h6>
            <div className="p-t">
              <p>32 Golden Stairs, 2nd Street</p>
              <p>Extension, Emerald Hill, Harare</p>
            </div>

            <div className="call">
              <p>+263 242 339 063</p>
              <p>+263 242 302 640</p>
              <p> +263 771 867 955</p>
              <p> +263 737 635 464</p>
            </div>

            <p className="email">sales1@prolificboreholes.com</p>
          </div>
          <div className="branche-2">
            <h6>Third Branch</h6>
            <div className="p-t">
              <p>Address no.1 Carisbrooke</p>
              <p>road , Eastlea, Harare </p>
            </div>
            <div className="call">
              <p>+263 776 288 960</p>
              <p>+263 777 123 103</p>
              <p>+263 242 747 307</p>
            </div>
            <p className="email">moreblessing@prolificboreholes.co.zw</p>
          </div>
          <div className="branche-2">
            <h6>Fourth Branch</h6>
            <div className="p-t">
            <p>Number 09 Nugget Road,</p>
           
            <p>Bulawayo</p>
            </div>
            <div className="call">
            <p>+263 771 355 543</p>
            <p>+263 783 497 432</p>
            <p>+263 292 880 026</p>
            </div>
            <p className="email">prolificboreholes@yahoo.com</p>
          </div>
        </div>
        <div className="inner">
          <div className="left">
            <h2>A Company You Can Trust</h2>
            <p className="p">
              Prolific Boreholes is a dynamic, full service borehole drilling &
              water solutions company. We’re totally dedicated to ensuring that
              the nation and region at large is provided with clean water.
              Beginning in 2013, we’ve rapidly risen on a foundation of
              competitively priced and top notch services, successfully drilling
              more than 100 boreholes around Zimbabwe. A lot of our business has
              thus been through referrals from past customers.
            </p>
            <button className="btn">
              <span>Read more</span>
            </button>
          </div>
          <div className="ryt">
            <img src="./images/Gold200.png" alt="" />
          </div>
        </div>
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
      </div>
    </Wrapper>
  );
}

export default About;
