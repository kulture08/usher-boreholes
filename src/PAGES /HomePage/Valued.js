import React from 'react';
import styled from 'styled-components'



function Valued () {
    return (
        <Wrapper>
            <h3 color="#121A34">Some Of Our Valued Customers</h3>
            
            <div className="valued-inner">
                    <img src="./images/mbada.png" alt="" />
                    <img src="./images//moonlight.png" alt="" />
                    <img src="./images/malaysian-embassy.png" alt="" />
                    <img src="./images/amjs.png" alt="" />
                    <img src="./images/dairi.png" alt="" />
                    <img src="./images/logo-FBC.png" alt="" />
                    <img src="./images/delta.png" alt="" />
                    <img src="./images/Partners/goal-logo.svg" alt="" />
                    <img src="./images/goal.png" alt="" />
  
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    text-align:center;
    
    margin:5% 7%;
    
   .valued-inner{
       overflow-x:scroll;
       display:flex;
       @media(min-width:768px){
            overflow: unset;
            flex-wrap: wrap;
            justify-content:space-between;
        }
    &::-webkit-scrollbar{
            background:#fff;
            height:2px;
        }
        &::-webkit-scrollbar-thumb{
          background:${props => props.theme.color.darkblue};
        }
   }
    img{
        width:180px;
        object-fit:contain;
        margin:0 20px;
        @media(min-width:768px){
           
            margin-bottom:30px;
        }
    }
    h3{
        margin-bottom: 30px;
        font-size:32px;
        display:block;
        width:100%;
    }
`;

export default Valued

