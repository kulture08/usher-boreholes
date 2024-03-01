import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  padding: 5%;
  .goal{
    @media(min-width:768px){
      display:flex;
      justify-content: center;
    align-items:center;
    }
    
    
   .txt{
    p{
      line-height: 1.3;
    margin-bottom: 30px;
    @media(min-width:768px){
      width: 86%;
    }
  

    }
   }
    
    img {
    width: 100%;
    @media(min-width:768px){
   
    }
  }
  }

`;
function Goal() {
  return (
    <Wrapper>
      <div className="goal">
        <div className="txt">
          <p>
            In 2021 Prolific Boreholes won a tender to be part of a project by
            Goal Zimbabwe under Sustainable Development Goal number 6: Clean
            Water and Sanitation. Which saw over 30 boreholes done in the
            communities of Chipinge and Buhera.
          </p>
        </div>
        <div className="txt">
          <img src=" ./images/goal.png" alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Goal;
