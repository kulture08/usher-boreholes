import React from 'react'
import styled from "styled-components";
const Wrapper = styled.section`
    background: rgb(13, 18, 34);
/* height: 70px;
padding-bottom:25%; */

padding:2%; 
@media(min-width:768px){
           

       }
.inner{
  padding: 20px;
  display: flex;
    flex-direction: column;
    justify-content: center;
    @media(min-width:768px){
      display: flex;
    flex-direction: row;
       align-items:center;  
                }
    @media(min-width:992px){
      justify-content:space-around;
                }
    .lft{
      p{
        /* width: 137%; */
        font-size:15px;
        color:#fff;
      }
    }
    .ryt{
      .p-2{
        margin-top:20px;
        /* width: 137%; */
        font-size:15px;
        color:#fff;
        @media(min-width:768px){
   margin:0 ;
                }
      }
      .diff{
        color:#439ED0;
      }
    }

}
` 

function Bottom() {
  return (
  <Wrapper>
      <div className='inner'>

        <div className='lft'>
        <p>Copyright © 2023 Prolific Boreholes. All rights Reserved.</p>
        </div>
       <div className='ryt'>
        <p className='p-2'>
        Handcrafted with love by <span className='diff' > revixions </span>Team
        </p>
        </div>
      </div>

  </Wrapper>
  )
}

export default Bottom