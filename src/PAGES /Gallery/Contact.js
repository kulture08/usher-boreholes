import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";
const Wrapper = styled.section`
  .footer-top {
    background: rgb(18, 26, 52);
    padding: 56px 5% 64px 5%;

    @media (min-width: 992px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .img-txt {
      p {
        margin-top: 5%;
line-height:1.6;
       
      }
      img {
        width: 70%;
        @media (min-width: 768px) {
          width: 30%;
        }
        @media (min-width: 1200px) {
          width: 250px;
        }
      }
      .iconz {
        margin-top: 20px;
        gap: 4%;
        display: flex;
        justify-content: flex-start;
      }
      margin: 3% 5px;
      /* margin-top:20px;
margin-bottom:20px; */
      svg {
        color: #fff;
        height: 30px;
        width: 30px;
        background: transparent;
        /* border-radius: 50%; */
        /* border: 1px solid #809bf9; */
      }
    }
    @media (min-width: 1200px) {
       padding-left:10%
        }
  }
  .text-outer {
    @media (min-width: 768px) {
      margin: 0 3%;
      gap: 5%;
      display: flex;
      justify-content: center;
    }
    @media (min-width: 992px) {
      width: 157%;
    }
    @media (min-width: 992px) {
   
    }

  }

  .txt {
    .links {
      margin-top: 20px;
      font-size: 10px;
    }
    h6 {
      margin-top: 20px;

      font-size: 17px;
      color: #fff;
    }
    .tag {
      margin-top: 20px;
      .p-tag {
        line-height: 1.4;
      }
      @media (min-width: 768px) {
     
      }
    }
    .namba {
      margin-top: 20px;
      p {
        line-height: 1.2;
      }
    }

  }
  p {
    font-size: 12px;
    color: #fff;
  }
`;
function Contact() {
  return (
    <Wrapper>
      <div className="footer-top">
        <div className="img-txt">
          <div>
            <img src="./images/logo1.png" alt="" />
          </div>

          <p>
            Prolific Boreholes is a dynamic, full service borehole drilling &
            water solutions company.
            <div className="iconz">
              <span>
                <a
                  href="
"
                >
                  <FaFacebookF />
                </a>
              </span>
              <span>
                <a
                  href="
"
                >
                  <FaInstagram />
                </a>
              </span>
              <span>
                <a
                  href="
"
                >
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </p>
        </div>
        <div className="text-outer">
          <div className="txt">
            <h6>Main Branch</h6>
            <div className="tag">
              <p className="p-tag">
                165 Harare Drive,
                <br />
                Marlborough, Harare
              </p>
            </div>
            <div className="namba">
              <p>+263 773 259 059</p>
              <p>+263 719 470 844</p>
              <p>+263 780 046 621</p>
              <p>+263 242 309 789</p>
            </div>
            <p className="links">prolificboreholes@yahoo.c om</p>
          </div>
          <div className="txt">
            <h6>Second Branch</h6>
            <div className="tag">
              <p className="p-tag">
                32 Golden Stairs, 2nd Street
                <br />
                Extension, Emerald Hill,
                <br />
                Harare
              </p>
            </div>
            <div className="namba">
              <p>263 242 339 063</p>
              <p>+263 242 302 640</p>
              <p>+263 771 867 955</p>
              <p>263 242 339 063</p>
              <p>+263 737 635 464</p>
            </div>
            <p className="links">sales1@prolificboreholes.c om</p>
          </div>
          <div className="txt">
            <h6>Third Branch</h6>
            <div className="tag">
              <p className="p-tag">
                Address no.1 Carisbrooke road ,<br/> Eastlea, Harare
              </p>
            </div>

            <div className="namba">
              <p>+263 776 288 960</p>
              <p>+263 777 123 103</p>
              <p>+263 242 747 307</p>
            </div>
            <p className="links">moreblessing@prolificboreholes.c o.zw</p>
          </div>
          <div className="txt">
            <h6>Bulawayo Branch</h6>
            <div className="tag">
              <p className="p-tag">
                Number 09 Nugget Road,
                <br />
                Bulawayo +
              </p>
            </div>
            <div className="namba">
              <p>+263 771 355 543</p>
              <p>+263 783 497 432</p>
              <p>+263 292 880 026</p>
            </div>
            <p className="links">prolificboreholes@gmail.c om</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;