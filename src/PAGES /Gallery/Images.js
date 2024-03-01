import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
padding:5%;
  .grid-container {
    @media(min-width: 768px){
      display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
 
}

.last {
  width: 100%;
  height: auto;
      @media(min-width: 768px){
       
        height:40vh;
        object-fit:cover;

      }
    }
    }
   
  
`;
function Images() {
  return (
    <Wrapper>
      <div className="grid-container">
        <img src="./images/last1.jpeg" className="last" alt="" />
        <img src="./images/last2.jpeg" className="last" alt="" />
        <img src="/images/gallery (2).jpeg" className="last"  alt="" />
        <img src="./images/last4.jpeg"  className="last" alt="" />
        <img src="./images/gallery (3) (1).jpeg" className="last" alt="" />
        <img src="./images/gallery (5).jpeg" className="last" alt="" />
        <img src="/images/gallery (2).jpeg" className="last" alt="" />
        <img src="./images/gallery (1).jpeg" className="last" alt="" />
        <img src="./images/last1.jpeg" className="last" alt="" />
        <img src="./images/gallery (3).jpeg" className="last" alt="" />
        <img src="./images/last2.jpeg" className="last" alt="" />
        <img src="./images/gallery (3).jpeg" className="last" alt="" />
      </div>
    </Wrapper>
  );
}

export default Images;
