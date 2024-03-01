import React from "react";
import { TextField, Button } from "@mui/material";
import styled from "styled-components";
const Wrapper = styled.section`
  padding: 20px;
  @media (min-width: 1200px) {
    margin: 86px 3% 0 46px;
        }
  .collection {
    h6 {
      font-size: 30px;
      font-weight: 900;
      margin-top: 30px;
    }
    p {
      font-size: 16px;
      
      margin-top: 20px;
    }
    form {
      display: flex;
      flex-direction: column;
      .name {
        margin-top: 40px;
     background:#F5F5F5;
    border:none;
        @media (min-width: 992px) {
    width: 100%;
        }
        @media (min-width: 1200px) {
    width: 99.5%;
        }
      }
      .combo{
        .full {
          background:#F5F5F5;
    border:none;
          width:100%;
        margin-top: 10px;
        @media(min-width:768px){
          width:360px;
        } 
       
        @media(min-width:992px){
          width:460px;
        } 
        @media(min-width:1200px){
          width:610px;
        } 
      }
      .phone {
        background:#F5F5F5;
    border:none;
        width:100%;
        margin-top: 10px;
        @media(min-width:768px){
          width:360px;
        }
        @media(min-width:992px){
          width:460px;
        } 
        @media(min-width:1200px){
          width:610px;
        } 
      }
      @media(min-width:768px){
        display:flex;
        justify-content:space-between;
      }
      @media(min-width:992px){
        justify-content:center;
        gap:5%;
      }
      @media(min-width:1200px){
       
        gap:1%;
      }
      }
     
      .email {
        background:#F5F5F5;
    border:none;
        margin-top: 10px;
        @media (min-width: 992px) {
          width: 100%;
        }
      }
      .location {
        background:#F5F5F5;
    border:none;
        margin-top: 10px;
        @media (min-width: 992px) {
          width: 100%;
        }
      }
      .message {
        background:#F5F5F5;
    border:none;
        margin-top: 10px;
        @media (min-width: 992px) {
          width: 100%;
        }
        } 
      }
    
    }
    button{
      width: 150px;
    border: none;
  font-size: 18px;
    height: 40px;
    margin-top: 20px;
    margin-left: auto;
    border-radius: 49px;
    background: rgb(38, 172, 226);
    color: rgb(255, 255, 255);
  @media (min-width: 768px) {
    width: 180px;
    height: 50px;
        }
  @media (min-width: 1200px) {
    margin: 21px 9% 100px 0;
        }
 
  }

    


`;
function Muiform() {
  return (
    <Wrapper>
      <div className="collection">
        <h6>Request Quote</h6>
        <p>Please fill in the form…</p>
        <form>
          <TextField
            label="Name of Organisation"
            variant="outlined"
            className="name"
          />
          <div className="combo">
            <div>
              <TextField
                label="full Name"
                variant="outlined"
                className="full "
              />
            </div>
            <div>
              <TextField
                label="Phone Number"
                variant="outlined"
                className="phone number"
              />
            </div>
          </div>

          <TextField
            label="Email Address"
            variant="outlined"
            className="email address"
          />
          <TextField label="Location" variant="outlined" className="location" />
          <TextField label="Message" variant="outlined" className="message" />
        </form>
        <button>
       Submit
        </button>
      </div>
    </Wrapper>
  );
}

export default Muiform;
