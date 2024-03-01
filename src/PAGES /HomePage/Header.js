import React,{useState} from 'react'
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
// import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .wrap {
    margin: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    position: relative;
    z-index: 5;
    width: 60%;
    @media (min-width: 1200px) {
      margin: -66px 0 0 0;
      width: 90%;
    }
  }
  ul {
    margin: 0;
    list-style: none;
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgb(18, 26, 52);
    top: 0;
    right: 0;
    display: flex;
    transition: all 0.7s ease;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    max-width: 0;
    overflow: hidden;
    padding: 0px;
    gap: 2%;
    @media (min-width: 768px) {
      height: 50vh;
    }
    @media (min-width: 992px) {
      position: relative;
    }
    @media (min-width: 1200px) {
      margin: -77px 0 0 0;
    }
    li a {
      font-weight:800;
      font-size:18px;
      display: block;
      color:#fff;
      font-size: 17px;
      line-height: 2;
      text-decoration: none;

      &:hover {
        border-bottom: 1px solid #fff;
      }
    }
    @media (min-width: 992px) {
      height: unset;
      flex-direction: row;
      max-width: 100%;
       background: none;
      justify-content: flex-end;
      margin-right: 150px;
      gap:3%;
    }
    svg{
      color:#fff;
    }
  }
  .hamburger {
    z-index: 8;
    position: relative;
    @media (min-width: 768px) {
      margin: 0 0 27px 315px;
    }
    @media (min-width: 992px) {
      display: none;
    }
    span {
      position: absolute;
      width: 30px;
      height: 3px;
      background: #fff;
      transition: all 0.7s;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;
        top: -7px;
        transition: all 0.7s;
      }
      &::after {
        transition: all 0.7s;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;
        top: 7px;
      }
    }
  }
  .open {
    span {
      background-color: transparent;
      &::before {
        top: 0;
        transform: rotate(-495deg);
      }
      &::after {
        top: 0;
        transform: rotate(495deg);
      }
    }
  }
  .change {
    max-width: 100%;
  }
`;
function Header() {
  const [click, setClick] = useState(false);

  return (
    <Wrapper>
      <div className="wrap">
        <div>
          <img src="./images/logo1.png" alt="" />
        </div>

        <div
          className={click ? "hamburger open" : "hamburger"}
          onClick={() => setClick(!click)}
        >
          <span></span>
        </div>
      </div>

      <ul className={click ? "change" : ""}>
        <li>
        <NavLink className="nav-link " to = '/' exact>
               Home
               </NavLink>
       
        </li>
        <li>
        <NavLink className="nav-link " to='/AboutusAllRounder' exact>
              Aboutus
               </NavLink>
        </li>
        <li>
        <NavLink className="nav-link " to = '/GalleryAllRounder' exact>
          Gallery
               </NavLink>
        </li>
        <li>

        <NavLink className="nav-link " to = '/RequestAllRounder' exact>
               Request
               </NavLink>
        </li>
       
      
      
       <li>
        <NavLink className="nav-link " to = './ContactAllRounder' exact>
               Contact
               </NavLink>
        </li>
       
        <li>
         
        </li>
        <span className="btn ">
        
          <CiSearch /> 
        </span>
      </ul>
    </Wrapper>
  );
}

export default Header;
