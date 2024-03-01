import React from 'react'
import styled from "styled-components";
const Wrapper = styled.section`
padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px){
      padding:0px;
    }

.images{
  width: 100%;
   object-fit: cover;
    @media (min-width: 768px){
      display: flex;
    align-items: center;
    justify-content: center;
    }

    img{
      width: 100%;

    object-fit: cover;
    @media (min-width: 768px){
      height: 16vh;
    }
    @media (min-width: 1200px){
      height: 30vh;
    }
    }
}
`;
function Borehole() {
  return (
    <Wrapper>
 <div className='images'>
<img src="./images/last1.jpeg" alt=""/>
<img src="./images/last2.jpeg" alt=""/>
<img src="./images/gallery (3).jpeg" alt=""/>
<img src="./images/last4.jpeg" alt=""/>
<img src="./images/last5.jpeg" alt=""/>
</div>
    </Wrapper>
   
  )
}

export default Borehole