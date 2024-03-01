import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  padding: 5%;
  .wrap {
    @media(min-width: 1200px){
      margin: 15px -15% 0px 1%;

        }
  
    .left {
      h6 {
        font-size: 32px;
        margin-bottom: 30px;
      }
      .p-top {
        font-size:15px;
        line-height: 1.5;
        letter-spacing: 0.5px; 
        @media(min-width: 992px){
          width: 428px;

        }
        @media(min-width: 1200px){
          width: 566px;

        }
      }
      .p-2 {
        margin-top: 30px;
        line-height: 1.5;
        letter-spacing: 0.5px; 
        /* letter-spacing: 1px; */
font-size:15px;
        @media(min-width: 992px){
          width: 428px;

        }        
        @media(min-width: 1200px){
          width: 562px;

        }        
      }
      .bg{

        margin-top:40px;
        padding:5%;
        background-color:#121A34;
        @media(min-width: 1200px){
          width: 100%;

        }  

        width: 96%;
      p{
        font-size:15px;
color: #fff;
        }

        .pbox-1{
          line-height:1.5;
          font-size:15px; 
          margin-top:20px;
          @media(min-width: 1200px){
            width: 480px;

        }   

        }
      }
    }
    .ryt{
     .h-top{
      font-size: 32px;
        margin-top: 30px;
        @media(min-width: 992px){
          margin-top: 6px;

        }
     }
     .h-bottom{
      font-size: 32px;
        margin-top: 30px;
        @media(min-width: 992px){
          margin-top: 100px;

        }
        @media(min-width: 1200px){
          margin-top: 60px;

        }
     }
     .ptag{
      letter-spacing: 0.5px; 
      /* letter-spacing: 1px; */
      font-size:15px;
      margin-top: 20px;
      line-height:1.5;
      @media(min-width: 992px){
        margin-top: 77px;

        }
      @media(min-width:1200px){
        width: 533px;
        margin-top: 60px;
        }
     }
     .pcombo{
  
      letter-spacing:1px;
      line-height:1.4;
      .p1{
        font-size:15px;
    margin-top: 20px;
    @media(min-width: 992px){
      margin-top: 80px;

      }
    @media(min-width: 1200px){
      margin-top: 51px;

      }
   }
     }
     
     .bg-2{
        margin-top:20px;
        padding:5%;
        background-color:#121A34;
       
        @media(min-width: 992px){
          margin-top: 70px;
          padding:5%;
        }
        @media(min-width: 1200px){
          margin-top: 46px;
    width: 73%;
    padding: 2.5%;
        }
       
      p{
        margin-top:20px;
        font-size:15px;
color: #fff;
        }
        .pbtm{
          line-height:1.5;
          font-size:15px;
        }
      }
    }

    @media(min-width: 992px){
      display:flex;
     justify-content:center;
     gap:5%;
    }
  }
`;
function Mission() {
  return (
    <Wrapper>
      <div className="wrap">
        <div className="left">
          <h6>Background</h6>
          <p className="p-top">
            Prolific Boreholes is a dynamic, full service borehole drilling &
            water solutions company. We’re totally dedicated to ensuring that
            the nation and region at large is provided with clean water.
            Beginning in 2013, we’ve rapidly risen on a foundation of
            competitively priced and top notch services, successfully drilling
            more than 100 boreholes around Zimbabwe. A lot of our business has
            thus been through referrals from past customers.
          </p>
          <p className="p-2">
            We’ve worked on domestic watering solutions and have also handled
            complex drilling for corporate bodies. You can count on us to serve
            you well with relevant solutions and services, making use of the
            best equipment and practices on the market. Prolific boreholes is
            working in collaboration with major manufacturers in water well
            drilling rigs and drilling tools to bring the latest technical
            know-how in borehole drilling, ultimately saving you time and money
            as our solutions are efficient. We’re ready to meet your drinking
            water, agriculture and mining sector requirements.
          </p>
          <div className="bg">
            <p>Mission</p>
            <p className="pbox-1">
              To provide best services to the region through quality and up to
              standard goods.
            </p>
          </div>
        </div>
        <div className="ryt">
          <h6 className="h-top">Our Promise</h6>
          <p className="ptag">
            To provide quality and vibrant services through our highly motivated
            team which is inspired to give you to maintain our market share
            experience at all times. Doing business with us will give you peace
            of mind.
          </p>
          <h6 className="h-bottom">Our Value</h6>
          <div className="pcombo">
          <p className="p1">Teamwork</p>
          <p className="p2">Efficiency</p>
          <p className="p3">Excellent Service Delivery</p>
          <p className="p4">Compliance to statutory regulations</p>
          </div>
          <div className="bg-2">
            <p>Vision</p>
            <p className="pbtm">
              To be a leading company in borehole drilling, pump installation,
              repairs and supply of all irrigation equipment.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Mission;
