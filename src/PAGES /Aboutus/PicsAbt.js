import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.section`
.wrap{
  @media (min-width: 768px) {
    display:flex;
  }
  img{
    width:100%;
    @media (min-width: 768px) {
      width:20%;
  }
    @media (min-width: 1200px) {
      object-fit:cover;
    height:30vh;
  }
  }
}
`
function PicsAbt() {
  return (
    <Wrapper>
        <div className='wrap'>
<img src="./images/last1.jpeg" alt=""/>
<img src="./images/last2.jpeg" alt=""/>
<img src="./images/gallery (3).jpeg" alt=""/>
<img src="./images/last4.jpeg" alt=""/>
<img src="./images/last5.jpeg" alt=""/>
</div>
    </Wrapper>
  )
}

export default PicsAbt